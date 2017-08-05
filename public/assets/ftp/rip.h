/******************************************************************************
 *	Copyright (c) 2002 Roadway Express, Inc.
 *		
 *	HEADER
 *	rip.h
 *		
 *	DESCRIPTION
 *	Header file for the Roadway IP library.
 *		
 *	NOTES / CAVEATS
 *		
 *	AUTHOR, REVIEWER
 *	David Pressler  12/30/02
 *		
 *	MODIFICATIONS
 *		
 *****************************************************************************/

#pragma comment (user, "%Z%MODULE: %P%  VERSION: %I%  %E%  %U%>")


/*****************************************************************************
 *	Symbolic Constants
 *****************************************************************************/

#define RIP_MAX_IP 20				/* max IP length */
#define RIP_MAX_HOST 80				/* max host name length */

#define DNS_CACHE 0				/* Use internal cache of DNS */ 
#define DNS_NO_CACHE 1				/* Force DNS lookup */

/*****************************************************************************
 *	Prototypes for Host/IP conversion
 *****************************************************************************/

char *ipadr2name (char *, int);
char *ipname2adr (char *, int);

/*****************************************************************************
 *	Prototypes for roadway sockets
 *****************************************************************************/

void sockets_exit_flag (int *pointer);
int accept_socket (int fd);
int server_socket (int serv_tcp_port, char *serv_host_addr);
int client_socket (int serv_tcp_port, char *serv_host_addr);
int close_socket (int sockfd);
int recv_socket (int sockfd, char *buffer, int len);
int send_socket (int sockfd, char *buffer, int len);
int select_socket (int fd, int tm_seconds);
