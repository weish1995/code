@include('variables')
@extends('master')

@section('title', 'Page Title1')
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
    @include('detail.css')
@endsection

{{--html部分--}}
@section('html')
    {{--@parent--}}
    <div class="page-group">
        <div class="page page-current" id="/detail">
            @include('detail.header')
            <div class="content content-detail">
                @include('detail.top-html')
                @include('detail.second_html')
                @include('detail.third-html')
                 @include('detail.message-html')
                {{--  @include('footer')--}}
            </div>
        </div>

        {{--js部分--}}
        @include('detail.js')
    </div>
@endsection
