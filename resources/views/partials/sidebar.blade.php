<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <div class="row">
      <div class="panel panel-default side_bar_panel">
        <div class="panel-heading side_bar_header">
          <h3 class="panel-title">Search Articles</h3>
        </div>
        <div class="panel-body">
            @if(Request::input('search'))
                <p class="text-info text-center">Showing results for: {{Request::input('search')}}</p>
            @endif
            <form class="" action="/search" method="get">
                <div class="input-group search_bar">
                    <span class="input-group-addon"><span class="glyphicon glyphicon-search"></span></span>
                  <input type="text" name="search" class="form-control" placeholder="Search articles">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="submit">Search</button>
                  </span>
                </div>
            </form>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="panel panel-default side_bar_panel">
            <div class="panel-heading side_bar_header">
                <h3 class="panel-title">Filters <span class="caret"></span></h3>
            </div>
            <div class="panel-body">
                <form action="filter" method="get">
                    <div class="panel panel-default side_bar_panel">
                        <div class="panel-heading side_bar_header">
                            <h3 class="panel-title">Brand <span class="caret"></span></h3>
                        </div>
                        <div class="panel-body">
                            <ul class="list-group">
                                @foreach($brands as $brand)
                                    <li class="list-group-item">
                                        <label><input type="checkbox" name="brand[]" id="brand_{{$loop->index}}" value="{{$brand->brand}}" {{in_array($brand->brand, Request::input('brand', [])) === true ? 'checked' : ''}}>
                                            {{$brand->brand}}
                                        </label>
                                        <label for="brand_{{$loop->index}}" class="pull-right">({{$brand->count}})</label>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="panel panel-default side_bar_panel">
                        <div class="panel-heading side_bar_header">
                            <h3 class="panel-title">Price <span class="caret"></span></h3>
                        </div>
                        <div class="panel-body">
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <input name="price[min]" type="hidden" id="price_slider_min" value="{{Request::input('price')['min'] ?? 0}}">
                                    <input name="price[max]" type="hidden" id="price_slider_max" value="{{Request::input('price')['max'] ?? 5000}}">
                                    <p id="filter_price_field" class="filter_price_field text-center text-success"></p>

                                    <div id="price_slider" data-price-filter-min="0" data-price-filter-max="5000"></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <input class="btn btn-default filter_button" type="submit" value="Filter">
                </form>
            </div>
        </div>
    </div>
</div>
