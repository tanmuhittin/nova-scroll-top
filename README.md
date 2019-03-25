# Nova Scroll Top
On route change scroll to the top of the page. On 422 error scroll to the first erroneous field.<br> You can install this package via:<br>
`` composer require tanmuhittin/nova-scroll-top ``

If you do not want to use scroll to erroneous field trait or scroll to the top on page load trait you can set this on config file. First publish it via:<br> 
`` php artisan vendor:publish --provider=TanMuhittin\NovaScrollTop\ScrollTopServiceProvider ``

```
    /**
     * Scroll to the top of the page on route change
     */
    'on_route_change' => true,

    /**
     * Scroll to the first erroneous field on 422 ajax errors
     */
    'on_error' => true,
```