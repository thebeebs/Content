---
title: Resetting the Root Password with MySQL on windows
authors:
- thebeebs
intro: Whilst using WebMartix for Demos I sometimes forge...
types:
- shorts
categories:
- mysql
published: 2011/10/10 12:00:00
updated: 2011/10/10 12:00:00
status: archived
---







Whilst using WebMartix for Demos I sometimes forget the password I used to set up a system and end up having to uninstall and reinstall MySQL just because I want to reset the password. A colleague pointed out to me that on the MySQL website they [have a guide on how you can easily reset the password](http://dev.mysql.com/doc/refman/5.5/en/resetting-permissions.html) as long as you are an administrator on the server. I've reposted the guide below for reference making a few changes to reflect the fact that I have a Windows 2008 R2 server.

On Windows, use the following procedure to reset the password for all MySQL `root` accounts: 

1.  Log on to your system as Administrator.
2.  Stop the MySQL server if it is running. For a server that is running as a Windows service, type Services in the program search and select Services . Find the MySQL service in the list, right click it and choose stop.

    If your server is not running as a service, you may need to use the Task Manager to force it to stop.3.  Create a text file containing the following statements. Replace the password with the password that you want to use.
      <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:5f4f8210-e200-45a6-9f9d-16e70dd4d44d" class="wlWriterEditableSmartContent"><pre class="brush: powershell;">UPDATE mysql.user SET Password=PASSWORD('MyNewPass') 
WHERE User='root';
FLUSH PRIVILEGES;</pre></div>

    Write the [`UPDATE`](http://dev.mysql.com/doc/refman/5.5/en/update.html) and [`FLUSH`](http://dev.mysql.com/doc/refman/5.5/en/flush.html) statements each on a single line. The [`UPDATE`](http://dev.mysql.com/doc/refman/5.5/en/update.html) statement resets the password for all `root` accounts, and the [`FLUSH`](http://dev.mysql.com/doc/refman/5.5/en/flush.html) statement tells the server to reload the grant tables into memory so that it notices the password change.
4.  Save the file. For this example, the file will be named `C:\mysql-init.txt`.

5.  Open a console window to get to the command prompt: From the Start menu, select Run, then enter **cmd** as the command to be run.

6.  Start the MySQL server with the special [`--init-file`](http://dev.mysql.com/doc/refman/5.5/en/server-options.html#option_mysqld_init-file) option (notice that the backslash in the option value is doubled):

    <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:b9162f0c-6b39-40ee-8f49-f330d7f8e8db" class="wlWriterEditableSmartContent"><pre class="brush: powershell;">C:\> "C:\Program Files\MySQL\MySQL Server 5.1\bin\mysqld" --init-file=C:\\mysql-init.txt</pre></div>
7.  If you installed MySQL to a location other than `C:\Program Files\MySQL\MySQL Server 5.1\`, adjust the command accordingly.

    The server executes the contents of the file named by the [`--init-file`](http://dev.mysql.com/doc/refman/5.5/en/server-options.html#option_mysqld_init-file) option at startup, changing each `root` account password.

    You can also add the [`--console`](http://dev.mysql.com/doc/refman/5.5/en/server-options.html#option_mysqld_console) option to the command if you want server output to appear in the console window rather than in a log file.

    If you installed MySQL using the MySQL Installation Wizard, you may need to specify a [`--defaults-file`](http://dev.mysql.com/doc/refman/5.5/en/option-files.html#option_general_defaults-file) option:

    <div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:f32c3428-b7e9-4f15-a8ea-c502c7ff2e88:4efb8941-ed5c-4056-9b11-020ea41d5100" class="wlWriterEditableSmartContent"><pre class="brush: powershell;">"C:\Program Files\MySQL\MySQL Server 5.1\bin\mysqld.exe"
--defaults-file="C:\\Program Files\\MySQL\\MySQL Server 5.1\\my.ini"
--init-file=C:\\mysql-init.txt</pre></div>

    The appropriate [`--defaults-file`](http://dev.mysql.com/doc/refman/5.5/en/option-files.html#option_general_defaults-file) setting can be found using the Services Manager: From the Start menu, select Control Panel, then Administrative Tools, then Services. Find the MySQL service in the list, right-click it, and choose the `Properties` option. The `Path to executable` field contains the [`--defaults-file`](http://dev.mysql.com/doc/refman/5.5/en/option-files.html#option_general_defaults-file) setting.
8.  After the server has started successfully, delete `C:\mysql-init.txt`.

You should now be able to connect to the MySQL server as `root` using the new password. Stop the MySQL server (you do this by opening up the task manager and stopping the mysqld.exe by right clicking) , then restart it in normal mode again. If you run the server as a service, start it from the Windows Services window. If you start the server manually, use whatever command you normally use. 