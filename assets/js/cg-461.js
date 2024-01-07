(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{759:function(s,a,e){"use strict";e.r(a);var n=e(7),_=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用easy-creds工具攻击无线网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用easy-creds工具攻击无线网络"}},[s._v("#")]),s._v(" 使用Easy-Creds工具攻击无线网络")]),s._v(" "),a("p",[s._v("Easy-Creds是一个菜单式的破解工具。该工具允许用户打开一个无线网卡，并能实现一个无线接入点攻击平台。Easy-Creds可以创建一个欺骗访问点，并作为一个中间人攻击类型运行，进而分析用户的数据流和账户信息。它可以从SSL加密数据中恢复账户。本节将介绍使用Easy-Creds工具攻击无线网络。")]),s._v(" "),a("p",[s._v("Easy-Creds是BackTrack5中的一部分。在Kali中，默认没有安装该工具。所以，需要先安装Easy-Creds工具才可使用。")]),s._v(" "),a("p",[a("strong",[s._v("安装Easy-Creds工具。具体操作步骤如下所示。")])]),s._v(" "),a("p",[s._v("（1）从https://github.com/brav0hax/easy-creds网站下载Easy-Creds软件包，其软件包名为easy-creds-master.zip。")]),s._v(" "),a("p",[s._v("（2）解压下载的软件包。执行命令如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root@localhost:~# unzip easy-creds-master.zip\nArchive: easy-creds-master.zip\nbf9f00c08b1e26d8ff44ef27c7bcf59d3122ebcc\n  creating: easy-creds-master/\n inflating: easy-creds-master/README\n inflating: easy-creds-master/definitions.sslstrip\n inflating: easy-creds-master/easy-creds.sh\n inflating: easy-creds-master/installer.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("从输出的信息中，可以看到Easy-Creds软件包被解压到easy-creds-master文件中。从以上信息中，可以看到在easy-creds-master文件中有一个installer.sh文件，该文件就是用来安装Easy-Creds软件包的。")]),s._v(" "),a("p",[s._v("（3）安装Easy-Creds软件包。在安装Easy-Creds软件包之前，有一些依赖包需要安装。这些依赖包，可以参考easy-creds-master文件中的README文件安装相关的依赖包。然后，安装Easy-Creds包。执行命令如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root@kali:~# cd easy-creds/\nroot@kali:~/easy-creds# ./installer.sh\n____ ____ ____ ____ ____ ____ ____ ____ ____ ____\n||e|||a |||s |||y |||- |||c |||r |||e |||d |||s ||\n||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||\n|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|\n Version 3.7 - Garden of Your Mind\n        Installer\nPlease choose your OS to install easy-creds\n1\\. Debian/Ubuntu and derivatives\n2\\. Red Hat or Fedora\n3\\. Microsoft Windows\n4\\. Exit\nChoice:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("以上信息显示了，安装easy-creds的操作系统菜单。")]),s._v(" "),a("p",[s._v("（4）这里选择安装到Debian/Ubuntu，输入编号1，将显示如下所示的信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Choice: 1\n____ ____ ____ ____ ____ ____ ____ ____ ____ ____\n||e |||a |||s |||y |||- |||c |||r |||e |||d |||s ||\n||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||\n|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|\n Version 3.7 - Garden of Your Mind\n          Installer\nPlease provide the path you'd like to place the easy-creds folder. [/opt] :   #选择安装位置，本例中使用默认设置\n[*] Installing pre-reqs for Debian/Ubuntu…\n[*] Running 'updatedb'\n[-] cmake is not installed, will attempt to install…\n  [+] cmake was successfully installed from the repository.\n[+] I found gcc installed on your system\n[+] I found g++ installed on your system\n[+] I found subversion installed on your system\n[+] I found wget installed on your system\n[+] I found libssl-dev installed on your system\n[+] I found libpcap0.8 installed on your system\n[+] I found libpcap0.8-dev installed on your system\n[+] I found libssl-dev installed on your system\n[+] I found aircrack-ng installed on your system\n[+] I found xterm installed on your system\n[+] I found sslstrip installed on your system\n[+] I found ettercap installed on your system\n[+] I found hamster installed on your system\n[-] ferret is not installed, will attempt to install…\n[*] Downloading and installing ferret from SVN\n……\n[*] Installing the patched freeradius server…\n……\nmake[4]: Leaving directory `/tmp/ec-install/freeradius-server-2.1.11/doc/rfc'\nmake[3]: Leaving directory `/tmp/ec-install/freeradius-server-2.1.11/doc'\nmake[2]: Leaving directory `/tmp/ec-install/freeradius-server-2.1.11/doc'\nmake[1]: Leaving directory `/tmp/ec-install/freeradius-server-2.1.11'\n[+] The patched freeradius server has been installed\n[+] I found asleap installed on your system\n[+] I found metasploit installed on your system\n[*] Running 'updatedb' again because we installed some new stuff\n…happy hunting!\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("以上信息显示了安装Easy-Creds包的详细过程。在该过程中，会检测easy-creds的依赖包是否都已安装。如果没有安装，此过程中会安装。Easy-Creds软件包安装完成后，将显示happy hunting！信息。")]),s._v(" "),a("p",[a("strong",[s._v("使用Easy-Creds工具破解无线网络。具体操作步骤如下所示。")])]),s._v(" "),a("p",[s._v("（1）启动Easy-Creds工具。执行命令如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("root@localhost:~/easy-creds-master#./easy-creds.sh\n____ ____ ____ ____ ____ ____ ____ ____ ____ ____\n||e |||a |||s |||y |||- |||c |||r |||e |||d |||s ||\n||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||\n|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|\n Version 3.8-dev - Garden of New Jersey\nAt any time, ctrl+c to cancel and return to the main menu\n1\\. Prerequisites & Configurations\n2\\. Poisoning Attacks\n3\\. FakeAP Attacks\n4\\. Data Review\n5\\. Exit\nq. Quit current poisoning session\nChoice:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("以上输出的信息显示了Easy-Creds工具的攻击菜单。")]),s._v(" "),a("p",[s._v("（2）这里选择伪AP攻击，输入编号3。将显示如下所示的信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Choice: 3\n____ ____ ____ ____ ____ ____ ____ ____ ____ ____\n||e |||a |||s |||y |||- |||c |||r |||e |||d |||s ||\n||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||\n|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|\n Version 3.8-dev - Garden of New Jersey\nAt any time, ctrl+c to cancel and return to the main menu\n1\\. FakeAP Attack Static\n2\\. FakeAP Attack EvilTwin\n3\\. Karmetasploit Attack\n4\\. FreeRadius Attack\n5\\. DoS AP Options\n6\\. Previous Menu\nChoice:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("以上输出信息显示了伪AP攻击可使用的方法。")]),s._v(" "),a("p",[s._v("（3）这里选择使用静态伪AP攻击，输入编号1。将显示如下所示的信息。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181107001209342.jpeg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("设置完以上的信息后，将会自动启动一些程序。几秒后，将会打开几个有效窗口。")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181107001341328.jpeg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("（4）当有用户连接Wifi接入点时，Easy-Creds将自动给客户端分配一个IP地址，并且能够访问互联网。如果在互联网上访问一个安全网址时，该工具将除去SSL并删除安全连接并在后台运行。所以，能够读取到客户端登录某个网站的用户名和密码。捕获到一个登录http://www.live.com网站的用户名和密码。其用户名为"),a("a",{attrs:{href:"mailto:test@live.com"}},[s._v("test@live.com")]),s._v("，密码为qwert。")]),s._v(" "),a("p",[s._v("（5）此时在Easy-Creds的主菜单中选择数据恢复，输入编号4，如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("At any time, ctrl+c to cancel and return to the main menu\n1\\. Prerequisites & Configurations\n2\\. Poisoning Attacks\n3\\. FakeAP Attacks\n4\\. Data Review\n5\\. Exit\nq. Quit current poisoning session\nChoice: 4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("（6）选择数据恢复后，将显示如下所示的信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("____ ____ ____ ____ ____ ____ ____ ____ ____ ____\n||e |||a |||s |||y |||- |||c |||r |||e |||d |||s ||\n||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||\n|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|\n Version 3.8-dev - Garden of New Jersey\nAt any time, ctrl+c to cancel and return to the main menu\n1\\. Parse SSLStrip log for credentials\n2\\. Parse dsniff file for credentials\n3\\. Parse ettercap eci file for credentials\n4\\. Parse freeradius attack file for credentials\n5\\. Previous Menu\nChoice: 3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("以上信息显示了可用证书的方法。")]),s._v(" "),a("p",[s._v("（7）这里选择分析Ettercap eci文件，输入编号3，将显示如下所示的信息：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("||e |||a |||s |||y |||- |||c |||r |||e |||d |||s ||\n||__|||__|||__|||__|||__|||__|||__|||__|||__|||__||\n|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|/__\\|\n Version 3.8-dev - Garden of New Jersey\nAt any time, ctrl+c to cancel and return to the main menu\nEttercap logs in current log folder:\n/root/easy-creds-master/easy-creds-2018-11-07-1722/ettercap2018-11-07-1724.eci\nEnter the full path to your ettercap.eci log file:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("从输出信息中，可以看到Ettercap日志文件的保存位置。")]),s._v(" "),a("p",[s._v("（8）此时输入ettercap.eci日志文件的全路径。这里只需要通过复制并粘贴提供的整个Ettercap路径就可以了。如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Enter the full path to your ettercap.eci log file: /root/easy-creds-master/easy-creds-2018-11-07-1722/ettercap2014-07-24-1724.eci\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输入以下路径后，将显示如图所示的界面")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181107001728273.jpeg",loading:"lazy"}})]),s._v(" "),a("p",[s._v("（9）从该界面可以清楚的看到，截获的客户端用户信息及登录的网站。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=_.exports}}]);