<script>
    // @ts-nocheck
    import HeroHome from '/src/lib/components/hero/HeroHome.svelte';
</script>

<div class="lg:px-6 2xl:px-0">
	<script>
		const MenuHandler = (flag) => {
			if (flag) {
				document.getElementById('list').classList.add('top-100');
				document.getElementById('list').classList.remove('hidden');
				document.getElementById('close').classList.remove('hidden');
				document.getElementById('open').classList.add('hidden');
			} else {
				document.getElementById('list').classList.remove('top-100');
				document.getElementById('list').classList.add('hidden');
				document.getElementById('close').classList.add('hidden');
				document.getElementById('open').classList.remove('hidden');
			}
		};
		// slider js starts

		let slides = document.querySelectorAll('.slide-ana>div');
		let slideSayisi = slides.length;

		let prev = document.getElementById('prev');
		let next = document.getElementById('next');
		for (let index = 0; index < slides.length; index++) {
			const element = slides[index];
			element.style.transform = 'translateX(' + 100 * index + '%)';
		}
		let loop = 0 + 1000 * slideSayisi;

		function goNext() {
			loop++;
			for (let index = 0; index < slides.length; index++) {
				const element = slides[index];
				element.style.transform = 'translateX(' + 100 * (index - (loop % slideSayisi)) + '%)';
			}
		}

		function goPrev() {
			loop--;
			for (let index = 0; index < slides.length; index++) {
				const element = slides[index];
				element.style.transform = 'translateX(' + 100 * (index - (loop % slideSayisi)) + '%)';
			}
		}

		next.addEventListener('click', goNext);
		prev.addEventListener('click', goPrev);
		document.addEventListener('keydown', function (e) {
			if (e.code === 'ArrowRight') {
				goNext();
			} else if (e.code === 'ArrowLeft') {
				goPrev();
			}
		});
	</script>
	<div class="container mx-auto relative z-20">
        <div class="container mx-auto relative z-20">
            <nav class="w-full absolute">
                <div class="hidden lg:flex w-full f-f-p justify-between items-center py-6 relative">
                    <div aria-label="pivot. logo" role="img">
                        <img class="dark:bg-white pb-1 px-2 mx-auto w-40 h-20" src="/img/BlueApe.png" alt="logo"/>     
                    </div>
                    <div class="md:w-1/2 xl:w-1/3">
                        <ul class="flex justify-between w-full items-center text-gray-600 dark:text-gray-200">
                            <li class="border-b-4 border-blue-600 pb-1">
                                <a href="javascript:void(0)">About Us</a>
                            </li>
                            <li class="border-b-4 hover:border-blue-600 border-transparent pb-1">
                                <a href="javascript:void(0)">Features</a>
                            </li>
                            <li class="border-b-4  hover:border-blue-600 border-transparent pb-1">
                                <a href="javascript:void(0)">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav class="lg:hidden">
                <div class="flex py-6 justify-between items-center px-4">
                    <div aria-label="pivot. Logo" role="img">
                        <img class="dark:bg-white pb-1 px-2 mx-auto w-15 h-20" src="/img/BlueApe.png" alt="logo"/>
                    </div>
                    <div class="visible flex items-center">
                        <button id="open" class="xl:hidden dark:bg-white focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="MenuHandler(true)" >
                            <img onclick="MenuHandler(true)" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_cta_and_placeholder-svg2.svg" alt="menuhandler"/>
                            
                        </button>
                        <ul id="list" class="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                            <li class="flex cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none">
                                <a href="javascript:void(0)" class="ml-2 focus:outline-none focus:ring-2 focus:ring-gray-600">
                                    <span class="font-bold">About Us</span>
                                </a>
                            </li>
                            <li class="flex cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none" onclick="dropdownHandler(this)">
                                <a href="javascript:void(0)" class="ml-2 focus:outline-none focus:ring-2 focus:ring-gray-600">
                                    <span class="font-bold">Features</span>
                                </a>
                            </li>
                            <li class="flex cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal py-2 hover:text-blue-700 focus:text-blue-700 focus:outline-none" onclick="dropdownHandler(this)">
                                <a href="javascript:void(0)" class="ml-2 focus:outline-none focus:ring-2 focus:ring-gray-600">
                                    <span class="font-bold">Privacy Policy</span>
                                </a>
                            </li>
                        </ul>
                        <div class="xl:hidden">
                            <button id="close" class="hidden close-m-menu focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="MenuHandler(false)">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_cta_and_placeholder-svg3.svg" alt="close handler"/>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <HeroHome />
    </div>
</div>
