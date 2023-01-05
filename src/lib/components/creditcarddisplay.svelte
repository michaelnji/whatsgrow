<script>
  // @ts-nocheck
  import d from '$lib/scripts/numberFunctions';

  export let holder, expiry, cvv, balance, number, colorFrom, colorTo;
  import chip from '$lib/images/bbPHJVe.png';
  import visa from '$lib/images/kGkSg1v.png';
</script>

<!-- component -->

<div class="max-w-[24rem] w-full h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl ">
  <img class="relative object-cover w-full h-full rounded-xl" alt="bg" src={visa} />

  <div class="w-full px-6 absolute top-4">
    <div class="flex justify-between">
      <div>
        <h1>Name</h1>
        <p class="font-medium tracking-widest">{holder}</p>
      </div>
      <img class="w-10 h-10" src={chip} alt="chip" />
    </div>
    <div class="pt-5 pb-2">
      <h1>Card Number</h1>
      <p class="font-medium  text-xl" style="word-spacing: .4em;">{number}</p>
    </div>
    <div class="pt-6 pr-6">
      <div class="flex justify-between">
        <div class="">
          <h1 class="font-light text-xs">Valid</h1>
          <p class="font-medium tracking-wider text-sm">{expiry}</p>
        </div>
        <div class="">
          <h1 class="font-light text-xs ">Balance</h1>
          <p class="font-medium tracking-wider text-sm">{d.formatNumCurrency(balance, 'USD')}</p>
        </div>

        <div class="">
          <h1 class="font-light text-xs">CVC</h1>
          <p class="font-bold tracking-more-wider text-sm">{cvv}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
