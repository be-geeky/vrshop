<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class UpdateArticles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'article:update {store}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update store articles';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $store = $this->argument('store');
        if (!method_exists($this, $store)) {
            return $this->error("Store '$store' not found!");
        }

        $this->$store();
    }

    public function amazon()
    {
        $link = 'https://www.amazon.co.uk/s/ref=nb_sb_ss_c_1_2';
        $link .= '?url=search-alias%3Daps&field-keywords=vr+headset&sprefix=vr%2Caps%2C160&rh=i%3Aaps%2Ck%3Avr+headset';

        $iteration = 0;
        do {
            # code...
        } while ($link = $crawler->filter('#pagnNextLink')->attr('href'));

        $crawler = \Goutte::request('GET', $link);
        $crawler->filter('div.product-grid__product-card')->each(function ($node) use (&$iteration) {
            $iteration++;



            $article = compact(
                'iteration',
                'title',
                'price',
                'rating',
                'brand',
                'store_domain',
                'article_path',
                'image_path'
            );
            $this->saveArticle($article);
        });
    }

    public function bestbuy()
    {
        $link = 'http://www.bestbuy.com/site/wearable-technology/';
        $link .= 'virtual-reality-headsets/pcmcat378200050018.c?id=pcmcat378200050018';

        $iteration = 0;

        do {
            $crawler = \Goutte::request('GET', $link);
            $crawler->filter('div.list-item')->each(function ($node) use (&$iteration) {
                $iteration++;

                $data = json_decode($node->attr('data-sku'), true);

                $title = $data['names']['short'] ?? null;
                $price = ($data['price']['currentPrice'] * 100) ?? null;
                $rating = $data['customerRatings']['averageRating']['percent0To100'] ?? null;
                $brand = $data['brand']['brand'] ?? null;

                $store_domain = 'http://bestbuy.com';
                $article_path = ($store_domain . $data['url']) ?? null;
                $image_path = $data['media']['primaryImage']['url'] ?? '/img/no-image.png';

                $article = compact(
                    'iteration',
                    'title',
                    'price',
                    'rating',
                    'brand',
                    'store_domain',
                    'article_path',
                    'image_path'
                );
                $this->saveArticle($article);
            });
        } while ($link = $crawler->filter('li.pager-next a')->attr('alt'));
    }

    public function validateArticle(array $article)
    {
        if (isset(
            $article['title'],
            $article['price'],
            $article['rating'],
            $article['store_domain'],
            $article['article_path'],
            $article['image_path']
        )) {
            return true;
        }

        $this->error('Confirmation required:');
        $this->error(print_r($article));
        if ($this->confirm('Do you wish to validate this article? [y|N]')) {
            return true;
        }

        return false;
    }

    public function saveArticle(array $article)
    {
        $article['active'] = $this->validateArticle($article);
        \App\Article::create($article);
    }
}
