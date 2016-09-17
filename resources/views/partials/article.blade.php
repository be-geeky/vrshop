<div class="col-md-4 text-center">
    <div class="thumbnail article_box">
        <div class="article_image">
            <img src="{{$article->image_path}}" alt="{{$article->title ?? 'Unknown title'}}">
        </div>
        <div class="caption">
            <h5 class="article_title" data-toggle="tooltip" title="{{$article->title}}">{{$article->title ?? 'Unknown title'}}</h5>
            <div class="article_rating" data-rating="{{$article->rating}}" data-toggle="tooltip" title="{{$article->rating}}">{{$article->rating}}</div>
            <p class="article_price">
                {{$article->price}}
            </p>
            <a class="article_domain" href="http://{{$article->store_domain}}">{{$article->store_domain}}</a>
            <a class="btn btn-default article_button" href="{{$article->article_path}}?id=8rpJGg4vYy8">More info</a>
        </div>
    </div>
</div>
