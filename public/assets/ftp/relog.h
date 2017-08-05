/******************************************************************************
 *	Copyright (c) 1997 Roadway Express, Inc.
 *		
 *	HEADER
 *	rweb.h
 *		
 *	DESCRIPTION
 *	Roadway web applications.
 *		
 *	NOTES / CAVEATS
 *		
 *	AUTHOR, REVIEWER
 *	David Pressler  03/05/97
 *		
 *	MODIFICATIONS
 *	David Pressler  12/23/02  Converted to new library.
 *		
 *****************************************************************************/

#pragma comment (user, "%Z%MODULE: %P%  VERSION: %I%  %E%  %U%>")


/*****************************************************************************
 *	Error logging macro.
 *****************************************************************************/

#define LOG_INFO __FILE__,__LINE__


/*****************************************************************************
 *	Log function prototypes.
 *****************************************************************************/

int log_entry (char *mod, int line, char *string, ...);
int log_msg (char *string, ...);
void log_init (char *p_prog_name, char *p_logfile);
