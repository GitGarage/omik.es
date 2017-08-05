class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
  end

  def editor
  end

  def characters
    if params[:value]
      character = Character.find_or_create_by(value: params[:value])
      character.coordinates.destroy_all
      shapes = JSON(params[:shape])
      shapes.each do |shape|
        shape.each do |coordinate|
          Coordinate.create(character: character, group: character.id, x: coordinate['x'].to_i, y: coordinate['y'].to_i)
        end
      end
    end
    characters = Character.where(id: Coordinate.pluck(:group).uniq).as_json
    characters.push(Character.new(value: 'New').as_json)
    render json: {characters: characters}
  end

  def combine
    character = Character.create(value: params[:value])
    shapes = JSON(params[:shape])
    shapes.each do |shape|
      shape.each do |coordinate|
        Coordinate.create(character: character, group: character.id - 1, x: coordinate['x'].to_i, y: coordinate['y'].to_i)
      end
    end
    render json: {success: true}
  end

  def coordinates
    character = Character.where(value: params[:character]).first
    coordinates = {}
    if character
      coordinates = Coordinate.where(group: character.id).as_json.group_by{|c| c['character_id']}.values
    end
    render json: {coordinates: coordinates}
  end

  def draw
    letters = params[:text].chars
    characters = Character.where(value: letters)
    ids = letters.flat_map{|letter| characters.where(value: letter).pluck(:id)}
    coordinates = Coordinate.where(group: ids).as_json.group_by{|c| c['character_id']}
    results = []
    ids.each do |id|
      results.push(coordinates[id])
    end
    render json: {side: results}
  end

  def main
    render json: {message: 'received'}
  end
end
