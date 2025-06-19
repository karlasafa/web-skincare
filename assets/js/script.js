const products = [
   {
      name: "Facial Wash",
      description: "Laneige Waterbank Blue HA Cleansing Gel",
      img: "assets/img/normal/Ncleanser.jpeg",
      link: "https://id.shp.ee/hgV2eb8",
      category: "Normal",
   },
   {
      name: "Suncreen",
      description: "Laneige Radian-C Sun Cream",
      img: "assets/img/normal/Nspf.jpeg",
      link: "https://id.shp.ee/pGqP5Wo",
      category: "Normal",
   },
   {
      name: "Toner",
      description: "La Mer Tonique",
      img: "assets/img/normal/Ntoner.jpeg",
      link: "https://id.shp.ee/HWCSUwf",
      category: "Normal",
   },
   {
      name: "Serum",
      description: "SK-II Spot Essence Serum",
      img: "assets/img/normal/Nserum.jpeg",
      link: "https://id.shp.ee/69oKU8R",
      category: "Normal",
   },
   {
      name: "Moisturizer",
      description: "Innisfree Green Tea Seed Hyalironic Cream",
      img: "assets/img/normal/Ncream.jpeg",
      link: "https://id.shp.ee/EbCoGXt",
      category: "Normal",
   },
   {
      name: "Mask",
      description: "Ceramidin Skin Barrier Moisturizing",
      img: "assets/img/normal/Nmask.jpeg",
      link: "https://id.shp.ee/eRP7zSD",
      category: "Normal",
   },
   {
      name: "Facial Wash",
      description: "Wardah Hydrating Aloe Gel",
      img: "assets/img/kering/Dcleanser.jpg",
      link: "https://id.shp.ee/27AhPkz",
      category: "Dry",
   },
   {
      name: "Sunscreen",
      description: "Skin Aqua UV Moisture Milk",
      img: "assets/img/kering/Dspf.jpg",
      link: "https://id.shp.ee/fD5h2VS",
      category: "Dry",
   },
   {
      name: "Toner",
      description: "4D Hyaluronic Acid Barrier Essence Toner",
      img: "assets/img/kering/Dtoner.jpeg",
      link: "https://id.shp.ee/sXVPVKD",
      category: "Dry",
   },
   {
      name: "Serum",
      description: "Hyaluronic 9+ Advanced + B5 Serum",
      img: "assets/img/kering/Dserum.jpg",
      link: "https://id.shp.ee/Q5YswNn",
      category: "Dry",
   },
   {
      name: "Moisturizer",
      description: "Ceramic Skin Saviour ",
      img: "assets/img/kering/Dcream.jpeg",
      link: "https://id.shp.ee/JzyBja2",
      category: "Dry",
   },
   {
      name: "Mask",
      description: "Water Sleeping Mask",
      img: "assets/img/kering/Dmask.jpeg",
      link: "https://id.shp.ee/hJs8bnh",
      category: "Dry",
   },
   {
      name: "Facial Wash",
      description: "Low PH Good Morning Gel Cleanser",
      img: "assets/img/oily/Ooily.jpeg",
      link: "https://id.shp.ee/k5CVimw",
      category: "Oily",
   },
   {
      name: "Sunscreen",
      description: "Biore Aqua Rich Watery Essence SPF 50",
      img: "assets/img/oily/Ospf.jpeg",
      link: "https://id.shp.ee/et5h8rT",
      category: "Oily",
   },
   {
      name: "Toner",
      description: "Cica Acne Toner",
      img: "assets/img/oily/Otoner.jpeg",
      link: "https://id.shp.ee/3ebCDPf",
      category: "Oily",
   },
   {
      name: "Serum",
      description: "Madagascar Centella Assiatica Ampoule",
      img: "assets/img/oily/Oserum.jpeg",
      link: "https://id.shp.ee/B3i6ekg",
      category: "Oily",
   },
   {
      name: "Moisturizer",
      description: "Panthenol Calming Water Gel",
      img: "assets/img/oily/Ocream.jpeg",
      link: "https://id.shp.ee/MeJRF65",
      category: "Oily",
   },
   {
      name: "Mask",
      description: "Volcanic Pore Clay Mask",
      img: "assets/img/oily/Omask.jpeg",
      link: "https://id.shp.ee/MBbpNwv",
      category: "Oily",
   },
   {
      name: "Facial Wash",
      description: "5X Ceramide Low pH Cleanser",
      img: "assets/img/sensitive/Scleanser.png",
      link: "https://id.shp.ee/746YZyR",
      category: "Sensitive",
   },
   {
      name: "Sunscreen",
      description: "BiomeProtect Physical Sunscreen",
      img: "assets/img/sensitive/Sspf.png",
      link: "https://id.shp.ee/SvLFGhT",
      category: "Sensitive",
   },
   {
      name: "Toner",
      description: "Pyungkal Yul Essence Toner",
      img: "assets/img/sensitive/Stoner.jpeg",
      link: "https://id.shp.ee/zeb4ie5",
      category: "Sensitive",
   },
   {
      name: "Serum",
      description: "Sakura Glow Hyaluron",
      img: "assets/img/sensitive/Sserum.png",
      link: "https://id.shp.ee/aEeynJQ",
      category: "Sensitive",
   },
   {
      name: "Moisturizer",
      description: "5X Ceramide Barrier",
      img: "assets/img/sensitive/Scream.jpeg",
      link: "https://id.shp.ee/od2XxQB",
      category: "Sensitive",
   },
   {
      name: "Mask",
      description: "Cicapair Intensive Shooting Repair Serum Mask",
      img: "assets/img/sensitive/Smask.jpeg",
      link: "https://id.shp.ee/CtqAEej",
      category: "Sensitive",
   },
];

const spedias = [
   {
      name: "Face Wash",
      description: "Skin care ini adalah untuk membersihkan wajah dari kotoran dan make up dengan sabun cuci muka yang sesuai dengan tipe kulitmu.",
      img: "assets/img/daftar/Facial_wash-removebg-preview.png",
   },
   {
      name: "SunScreen",
      description: "Sunscreen adalah produk perawatan kulit yang berfungsi sebagai pelindung kulit dari pengaruh sinar UV matahari.",
      img: "assets/img/daftar/spf_16344698-removebg-preview.png",
   },
   {
      name: "Moisturizer",
      description: "Moisturizer atau pelembap wajah digunakan untuk melembabkan kulit dan mengatasi kulit kering terutama pada area wajah.",
      img: "assets/img/daftar/cream_10605633-removebg-preview.png",
   },
   {
      name: "Sleep Mask",
      description: "Krim malam dirancang untuk menjaga kelembaban dan memulihkan kulit sepanjang malam. Sleeping mask umumnya merupakan produk terakhir yang digunakan pada skin care routine.",
      img: "assets/img/daftar/Sleeping_mask-removebg-preview.png",
   },
   {
      name: "Exfoliation",
      description: "Eksfoliasi adalah proses mengangkat sel-sel kulit mati dari permukaan kulit. Ini dapat dilakukan dengan menggunakan bahan-bahan seperti scrub (eksfoliator mekanis) atau asam (eksfoliator kimia).",
      img: "assets/img/daftar/skincare_2763315-removebg-preview.png",
   },
   {
      name: "Toner",
      description: "Toner adalah cairan ringan yang digunakan setelah membersihkan wajah. Toner juga membantu menyeimbangkan pH kulit dan memberikan hidrasi ringan.",
      img: "assets/img/daftar/toner-removebg-preview.png",
   },
   {
      name: "Retinol",
      description: "Retinol adalah bentuk vitamin A yang sering digunakan dalam produk perawatan kulit untuk mempromosikan regenerasi sel-sel kulit, merangsang produksi kolagen, dan mengurangi tanda-tanda penuaan seperti garis halus dan kerutan.",
      img: "assets/img/daftar/retinol-removebg-preview.png",
   },
   {
      name: "Serum",
      description: "Serum adalah formula perawatan kulit yang konsentrat, biasanya mengandung bahan aktif seperti vitamin, antioksidan, peptida, atau bahan-bahan lain yang bertujuan untuk menangani masalah spesifik kulit, seperti penuaan, hiperpigmentasi, atau hidrasi.",
      img: "assets/img/daftar/serum-removebg-preview.png",
   },
];

document.querySelector("footer").innerHTML = `
   <div class="footer-container">
      <div class="footer-section">
         <h3>Jelajahi</h3>
         <ul>
            <li>
               <a href="index.html">Home</>
            </li>
            <li>
               <a href="index.html#about">About</a>
            </li>
            <li>
               <a href="index.html#desc">Skincare</a>
            </li>
            <li>
               <a href="index.html#contact">Contact</a>
            </li>
         </ul>
      </div>
      <div class="footer-section">
         <h3>Hubungi Kami</h3>
         <ul>
            <li>
               <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                     <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                  <span>wiskinpedia@gmail.com</span>
               </a>
            </li>
            <li>
               <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                     <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                  <span>BSI Merdeka Bogor</span>
               </a>
            </li>
            <li>
               <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                     <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  <span>+62 8123 4567 8902</span>
               </a>
            </li>
         </ul>
      </div>
      <div class="footer-section">
         <h3>Ikuti Kami</h3>
         <ul>
            <li>
               <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>@skinwipedia</span>
               </a>
            </li>
            <li>
               <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                     <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  <span>Wi Skin Pedia</span>
               </a>
            </li>
         </ul>
      </div>
   </div>
   <div class="footer-bottom">
      <p class="copyright">Copyright © 2024. All rights reserved.</p>
      <p class="privacy-links">
         <a href="#">Privacy Policy</a> | <a href="#">Terms Of Use</a>
      </p>
   </div>
`;

const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", function () {
   if (window.scrollY > 180) {
      navbar.classList.add("backdrop-blur");
   } else {
      navbar.classList.remove("backdrop-blur");
   }
});
