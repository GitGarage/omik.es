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
 *	David Pressler  10/23/97  Added rweb.c
 *	David Pressler  10/31/97  Changed query QUY_SIZE and ROW_SIZE.
 *	David Pressler  07/07/98  Changed COL_SIZE.
 *	David Pressler  10/01/98  Added functions web_header, web_footer.
 *		
 *****************************************************************************/

#pragma comment (user, "%Z%MODULE: %P%  VERSION: %I%  %E%  %U%>")

/*****************************************************************************
 *	Error logging macro.
 *	Return value symbolic constants.
 *****************************************************************************/

#define LOG_INFO __FILE__,__LINE__

#define OK 0
#define ERROR -1

/*****************************************************************************
 *	Definitions for communication between the CGI and Janus Interface.	
 *****************************************************************************/

#define JI_IP "127.0.0.1"			/* Janus Interface IP */
#define JI_PORT 5022				/* Janus Interface Port */

#define S_ERROR1 "Error: Server not available"
#define S_ERROR2 "ENTER PRO#"

#define I_TYPE_SIZE 1 				/* Size of input type */
#define I_TRACK_SIZE 30				/* Size of input track */
#define I_ZIP_SIZE 10				/* Size of input zip */

#define QUY_SIZE 256				/* Length of query string */

#define COL_SIZE 160				/* Length of a column */
#define ROW_SIZE 100				/* Length of a row */
#define BUF_SIZE COL_SIZE*ROW_SIZE		/* Response buffer */

/*****************************************************************************
 *	Debug macro.
 *****************************************************************************/

/* #define DEBUG */

#ifdef DEBUG
#define DBG(x) x;
#else
#define DBG(x) ;
#endif

/*****************************************************************************
 *	Log function prototypes.
 *****************************************************************************/

int log_entry (char *mod, int line, char *string, ...);
int log_msg (char *string, ...);
void log_init (char *p_prog_name, char *p_logfile);


/*****************************************************************************
 *	Web utilities (rweb.c). 
 *****************************************************************************/

int get_pair (char *dest, char *src, char *entry, int max_len);


/*****************************************************************************
 *	Web HTML (web_html.c).
 *****************************************************************************/

int web_header (char *header, char *title);
int web_footer (void);
