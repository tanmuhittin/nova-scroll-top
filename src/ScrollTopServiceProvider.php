<?php

namespace TanMuhittin\NovaScrollTop;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class ScrollTopServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../config/nova-scroll-top.php' => config_path('nova-scroll-top.php'),
        ]);
        Nova::serving(function (ServingNova $event) {
            if(config('nova-scroll-top.on_route_change')){
                Nova::script('nova-scroll-top', __DIR__ . '/../dist/js/nova-scroll-top.js');
            }
            if(config('nova-scroll-top.on_error')){
                Nova::script('nova-scroll-to-error', __DIR__ . '/../dist/js/nova-scroll-to-error.js');
            }
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/nova-scroll-top.php', 'nova-scroll-top');
    }
}
