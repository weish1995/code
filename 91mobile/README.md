# 91mobile 使用到的技术和框架
## 后端 php的[laravel](http://laravelacademy.org/post/79.html)
## 前端 基于node的使用gulp和webpack结合的构建，页面采用[sui](http://m.sui.taobao.org/) + [zepto](http://zeptojs.com/). 

# 91mobile 目录结构

|目录|描述|
|---|---|
|/ | 根目录|
|/app/ | 不知道做啥的|
|/assets/ | 前端目录|
|/bootstrap/ | 不知道做啥的|
|/config/ | 不知道做啥的|
|/database/ | 不知道做啥的|
|/public/ | 最后发布的目录，包含前端和后端生成的文件|
|/resources/ | 包含视图文件，其他的不清楚|
|/routes/ | 路由文件夹，包含api的路由和页面的路由|
|/storage | 不知道做啥的|
|/tests | 不知道做啥的|
|/vendor | 不知道做啥的|
# 91mobile 后端开发环境搭建(Windows)
[参考链接](http://www.zabbix.cc/windows/2259/)
# 91mobile 后端开发环境搭建(Mac)
如果未安装brew，先安装brew

```
安装命令：

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

## php70
```
安装命令:

brew install homebrew/php/php70 --with-apache
```
如果安装失败在不清楚原因的情况下执行 

```
brew doctor
```

## apache
```
安装命令：

homebrew/apache/httpd24
```

apache安装成功后会在/etc/目录下有一个/apache2目录，里面就是apache的目录。
进入到apache2目录，编辑httpd.conf文件，查找php，会看到如下内容

```
	#LoadModule actions_module libexec/mod_actions.so
 	#LoadModule speling_module libexec/mod_speling.so
 	#LoadModule userdir_module libexec/mod_userdir.so
 	#LoadModule alias_module libexec/mod_alias.so
 	#LoadModule rewrite_module libexec/mod_rewrite.so
 	#LoadModule php5_module libexec/apache2/libphp5.so
<IfModule unixd_module>

去掉LoadModule rewrite_module libexec/mod_rewrite.so前面的#

找到
<Directory "/mnt/www/">

  AllowOverride ALL
   Order allow,deny
    Allow from all

</Directory>
搜索AllowOverride None 替换为 AllowOverride All

```
将倒数第二行改为

```
LoadModule php7_module /usr/local/Cellar/php70/7.0.11_5/libexec/apache2/libphp7.so

ps: libphp7.so的路径要根据php安装的路径决定
```
然后查找AddType,会看到如下内容

```
 	# Filters allow you to process content before it is sent to the client.

 	To parse .shtml files for server-side includes (SSI):
 	# (You will also need to add "Includes" to the "Options" directive.)
 	#
 	#AddType text/html .shtml
 	#AddOutputFilter INCLUDES .shtml
</IfModule>
```
在倒数第二行加入

```
AddType application/x-httpd-php .php
```
继续查找DocumentRoot，看到类似如下代码

```
DocumentRoot "/Users/allces/work/gitwork/91mobile"
<Directory "/Users/allces/work/gitwork/91mobile">
    #
    # Possible values for the Options directive are "None", "All",
    # or any combination of:
    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that "MultiViews" must be named *explicitly* --- "Options All"
    # doesn't give it to you.
```
记录下DocumentRoot后面的路径，这个目录就是网站的根目录。
然后在该目录下创建名为index.php的文件，内容为

```
<? phpinfo(); ?>
```
继续查找Listen,会看到如下代码

```
 # Change this to Listen on specific IP addresses as shown below to
 # prevent Apache from glomming onto all bound IP addresses.
 #
 #Listen 12.34.56.78:80
 Listen 80
```
最后一行的Listen后面的数字就是网站的端口。
保存httpd.conf并退出。
重启apache，然后访问http://localhost:(具体的端口号)/index.php，
正常会看到php的基本信息。
## php的包管理Composer，可以不用安装


如果打开看到

```
Whoops, looks like something went wrong.
```
信息,在根目录执行

```
cp .env.example .env
php artisan key:generate
```

# editorconfig插件下载
phpStorm -> Preferences -> Plugins -> Browse Reponsitories

```
搜索 editorconfig
```

点击右边install
然后重启

# 前端环境安装和构建
## 目录
/assets/
## 删除node_modules
```
rm -rf node_modules (请确保目录正确,一定不要执行rm -rf /)
```
## 首先安装依赖
```
npm install (npm较慢,也可以使用cnpm install)
```
## 在安装依赖完成的基础上,执行构建命令(请勿使用cnpm代替npm)
开发环境

``` 
npm run dev (本地开发一定要保证这条命令一直在执行)
```
测试环境

```
npm run build-test
```
生产环境(线上)

```
npm run build-release
```
## 前端生成文件目录
```
/public/dist/
```
## phpstorm配置[eslint](http://eslint.org/)
1. 先在assets目录执行
```
npm install (或cnpm install)
```
2. PhpStorm(windows选择file) -> Preferences(windows选择setting) -> 搜索eslint
3. 点击左边eslint 
4. 将右边的Enable可选框选中
5. Node Interperter填入node执行文件(该示例为mac版)

```
/usr/local/bin/node
```
6. ESLint package选择91mobile assets目录node_modules下的eslint文件夹

```
存放的目录/91mobile/assets/node_modules/eslint
```
7. Configuration file下的单选框选择Configuration file，选择91mobile项目下eslintrc的目录

```
存放的目录/91mobile/assets/.eslintrc.js
```