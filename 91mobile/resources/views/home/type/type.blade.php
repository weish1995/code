@include('variables')
@extends('master')

@section('title', 'wo bushi title')
@section('metaTitle', 'woshi meta meta title')
@section('metaKeywords', 'woshi meta title')
@section('metaDescription', 'woshi meta title')
@section('metaAuthor', 'woshi meta title')
@section('metaApplicationName', 'woshi meta title')
@section('metaMsApplicationTooltip', 'woshi meta title')
@section('metaCopyright', 'woshi meta title')
@section('base', 'woshi meta title')
@section('icon', 'woshi meta title')

{{--css部分--}}
@section('css')
    @include('home.type.css')
@endsection

{{--html部分--}}
@section('html')
    {{--@parent--}}
    <div class="page-group">
        <div class="page page-current" id="/type">
            @include('header')
            @include('home.type.html')
            @include('footer')
        </div>

        {{--js部分--}}
        @include('home.type.js')
    </div>
@endsection


