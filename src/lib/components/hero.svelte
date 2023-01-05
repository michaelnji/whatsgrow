<script>
  import heroImg from '$lib/images/hero/19.svg';
  import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar />
<section>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:pt-16">
    <div class="flex flex-wrap md:!flex-nowrap items-center !mx-auto max-w-7xl xl:justify-center">
      <div class="max-w-lg mx-auto">
        <div>
          <div class="relative w-full max-w-lg">
            <div
              class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            />

            <div
              class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
            />
            <div class="relative">
              <img
                class="object-cover object-center !mx-auto md:!max-w-sm lg:!max-w-full max-w-xs"
                alt="hero"
                src={heroImg}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center md:!items-start mt-12 md:mt-36 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 mx-auto md:mx-0 lg:!mt-12"
      >
        <h1
          class="mb-8 text-5xl font-extrabold leading-none tracking-tighter  md:!text-6xl lg:!text-7xl xl:text-8xl text-center md:!text-left max-w-xl  md:!max-w-full xl:!max-w-[90%] lg:capitalize"
        >
          Need more whatsapp views?
        </h1>
        <p
          class="mb-8 text-lg lg:text-xl leading-relaxed  text-center md:!text-left max-w-md md:!max-w-full opacity-80"
        >
          Gain up to 1k+ contacts weekly automatically and gain massive visibility with our SMM
          tools and services. Fast. Reliable. Efficient.
        </p>
        <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
          <a href="/add" class="btn btn-primary btn-lg"> Submit contact </a>
        </div>
      </div>
    </div>
  </div>
</section>
