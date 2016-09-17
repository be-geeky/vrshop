@extends('layout')

@section('title')
    Browse Products
@endsection

@section('body')
    @include('partials.sidebar')

    <div class="col-xs-12 col-sm-8 col-md-9">
        @if(count($articles) > 0)
            @include('partials.pagination')
        @endif

        @if(count($articles) > 0)
            @foreach($articles as $article)
                @include('partials.article')
            @endforeach
        @else
            <h1 class="text-center">No articles found.</h1>
        @endif

        @if(count($articles) > 0)
            @include('partials.pagination')
        @endif
    </div>
@endsection
