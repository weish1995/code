<!DOCTYPE html>
<html lang="zh-cmn-Hans">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="renderer" content="webkit">
        <title>@yield('title')</title>
        <meta name="title" content="@yield('metaTitle')">
        <meta name="keywords" content="@yield('title')">
        <meta name="description" content="@yield('title')">
        <meta name="author" content="@yield('title')">
        <meta name="application-name" content="@yield('title')">
        <meta name="msapplication-tooltip" content="@yield('title')">
        <meta name="copyright" content="@yield('title')">
        <meta name="MSSmartTagsPreventParsing" content="True">
        <meta http-equiv="MSThemeCompatible" content="Yes">
<!--        <base href="@yield('title')">-->
        <link rel="icon" href="@yield('title')" />
        <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">

        @section('css')
        @show
    </head>
    <body>
        @section('html')
        @show
    </body>
</html>
