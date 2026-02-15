'use client';

import { useState, useEffect, useRef } from 'react';

const ProductCard = ({ image, hoverImage, brand, title, price, alt, hoverAlt }) => {
  return (
    <div className="product-card group cursor-pointer">
      <div className="relative aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden mb-4">
        <img
          className="primary-image absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          alt={alt}
          src={image}
        />
        <img
          className="hover-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
          alt={hoverAlt}
          src={hoverImage}
        />
        <button className="absolute top-4 right-4 size-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
        <div className="quick-view absolute inset-x-4 bottom-4">
          <button className="w-full bg-primary text-white font-sans text-xs font-bold uppercase tracking-widest py-3 rounded-lg shadow-xl shadow-primary/30">
            Quick View
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary">{brand}</p>
        <h3 className="text-base font-bold text-stone-800 ">{title}</h3>
        <p className="font-sans text-sm font-medium">₹{price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default function ShopSection() {
  const [selectedDesigners, setSelectedDesigners] = useState(['Anita Dongre']);
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [isEndVisible, setIsEndVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState(800);

  const sentinelRef = useRef(null);
  const asideRef = useRef(null);
  const productColumnRef = useRef(null);

  // Sync sidebar height to product column for uniformity
  useEffect(() => {
    if (!asideRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSidebarHeight(entry.target.offsetHeight);
      }
    });

    resizeObserver.observe(asideRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Monitor page scroll to handle sticky sort bar transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6hyk7mY-uV5FiNt6kJQ3iRsaAST2Ypsq9ZsvAQsSa1xctyK0HEn43bV6Vtyp3ObreFi5Hzq7RRTVbl6Zr8K5xvFGh3j5bbeBnSeRm6hjrDvkn0nafSZH0HAoVhLeaMdMuPDZpTVLpZcM1ytr52QU4qjaT5uVtQL8uGptw_Sz8Bvo_iEwH7YiajqHes82FTiAwoNWM0AcKnp1XuEqBGCPXdYlKYkuXkNLHm5b5XMg4eMwOgKR4w-jwU_VMvOb9nnSlN6FfhiVb3U8",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAhpGCb3jsRim3eXm3rcKasXr1yjPXMWB7xrezvripX0geprkryJoKGjQgvf0bV_rkpfwyzIkW1p9FEEMSR1tHw6yy1wxF5BVD_0FwGqstakJXH5I_TuQEgxJl24ECIKQILOZ-9VcA0wZWN3EVAD4w-Trg0KuPG8PXReQiAR8-79NksW3DytjwbzgEorfpayKIio4-fE2jeT4WUBNZ53DVaSyPG8zNFKWGTeIxkAfODG3dHEKL3mgkCqvTb88LfX7ioFbnOuEqoUY",
      brand: "Anita Dongre",
      title: "Celestial Kundan Choker",
      price: 124999,
      alt: "Intricate Kundan choker necklace set",
      hoverAlt: "Model wearing Kundan choker necklace set"
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD6qjgj7da-md3OUYBlJENJT4ScaGs3i5Jo8nqxWMbMxGn2rysXaJOb5HAtfOwFYM5lBjE-NYz6KRac7H7658rJk9zgtQoTzEgmSzFMt63FRPI2mg8srft519T_yX0r5QsIws7VrgS3U7pEcSzaaCtgyNB7bedJvCHZcB25F_q8AeBcUkdhhlw4niy61oxBB2H8hYgeBrWzV6GzH7BkPwG7MUVYSd95xwPYqB9HmxJiKTyU7nTvmZP8P_Tcm7zu9Qk1eE6OPC_vb0",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuARq2KcyEtKX24MtkHQu_s5KYULL4WIr5v7q6klmYmwt3Hi_JD4aBzY7r5ygoVrYzKiN2xVhn-Q1Kg94rSLFOvG7RUXH26F8Jj5-ll2Kbh567xpbubhyznpaNt9kOwXXFSP-QyzCIguga5pPTo79izkzEagl6fs4y5yD65mvIqz-ajDF92iD_LPNSFCAbqv-LvRkC_fEtEtr8nrSlr1fEuyLwoU1PoBdUCp1EXQ8zNyBr2mcp5fbYzgtnAc1oNiC0rdOJf5eCSb8",
      brand: "Sabyasachi",
      title: "Heritage Pearl Haar",
      price: 285500,
      alt: "Gold plated Polki necklace with pearls",
      hoverAlt: "Close up of Polki necklace details"
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKQ2ol4je65lmwd2bOaq7QmKOjp1WaChbAhMI8mnEMi4Gfu5nrgM-iaUvpdtXBXMQR0DLZvuJnydc-08YRHzBSbJK62ucc8GR5A5bymCSrX_iFsk8deU4Eg4_IwWy4AQdyyOm77bomypRkziLHv-__mFJhJaKmrXhmSoOMTAKGvSITEonc9HQq6SKh-00pgEIxIdBaeO2EY9E_WhA7GIuvtrhztOUPC9cnZuVEuTqFfqfHI4LKj3e-f_j1fBAWxTU2GIN15pRl3MI",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxaH2qhfKAA7HWF6fE2_WWg8unUfWeGreWMpB1IYjBEBatJnm5Ki4YwBN08RAdOhzx1T6t-LKJDm5IpIAEZRgwzi-hQqc9KtqhvsFfQYHzDjprK3ujSjY5QYdS-J_QCW3ptnRblPiueSd6Iq2pGeMDZtXjIRUGqjTJI2Uxi3wBjdXy9TctrZHvkbx30224OwlEOOZ4eCp0kg4hOqgG1sArwFmOunfbtmxG8CpfTlPcnumPSSC06MwI1khvDZtVVzfpslWqkbo",
      brand: "Ritu Kumar",
      title: "Emerald Jhumkas",
      price: 48900,
      alt: "Handcrafted Jhumka earrings with emeralds",
      hoverAlt: "Side view of handcrafted Jhumka earrings"
    },
    {
      id: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrj-zmRCHpOfIIX1P25yaAldluYW77Es5XXonJSk5vFAygusJJlnFY8mH9L8l2KT0eV96914bbt-sZP6C1yTAZSmR_TfmDw6QNH-SB376k2tv3tN5RNbrG-9PvqSv6yxEwAt-liV2ArJq1cBgUEKXndU8WvD289UcqjzvO4lBv1IDvakgjzSD_TmkEIKPTOcJdv4VVRmiU_x0TyaIJvwwrtq7NjPU7v_gvvNZ2NhqJXPgAt9cwuceGKrLy6IfOiL2jrOF5aF7wN7E",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5dcaHaayh_s2uJR2Bx2jY8CiwpvImxf5t5dJL_vM8QBhcpGvXvk-VjXTGK3Q0ci7DhVAT_lNWNkVbguCCBdX4BIbBec96xc3CtO99elFdon0nnh4BMNropr1UgiNsv4nVNro28hCEKiYLlV2LjkxaOPk83I8LJiuY3N4CkKunk3qLoJaoNktigPX58qvPHG9z1y9PxJbqZXxhNXuC2Ivo-OauRUcEecRxQ7BDxfW4hgXYlE46eReAQGIYaHvT7W_QAtZ-NDM-uik",
      brand: "Tarun Tahiliani",
      title: "Eternal Gold Kada",
      price: 92000,
      alt: "Meenakari work gold bangles",
      hoverAlt: "Model wearing Meenakari gold bangles"
    },
    {
      id: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOhloR7Vo2ynnWdvDpMKB25AOFf3ZQLgVmtYlmVeX9D0W4mSn4Wu9t1xSvsuRrh-GYrce3y5-btnOhtPjZhUMBkWyDIsGcO7Eu98pmjGDc5hEkOBnu-MRLRWIHUdGAC9ldaQiCV8a3mHK0t9dm8iZIm1XvGAZbldtOlzO8K6Jb24vZ1Htk-WMrxp3XrtDdAD-pwAuhBjrwyC_UEQYwALgh7thVepXQZKhvF1kvLNL6QRHLEZHMdGXyx0W5bobbeRXUVY04zp0MWVI",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLrv51yAisFT_lFwKfy0cRUemF-o7aISJ4MlIwOGED5Be9zm-09dRtFthizL32XgfEdBKwHDlZK4p8gsQAcYib5g8ZBx1pC6_bo3ihFNUkWTw8HmvcTexBwOtqJ0idi9KelJsi0oRO5rMU3OdvDCq_ZSp7agWBIfczmiwW8Vna357nPTRrl8LN2m6PFdIaqdCE3wOEf7XLO-CEfjmB1akSNykk-0gidVohQCrtUQX3kUmdY4Mc9hfwkjFKgFau4geLz7YuDK0qDp8",
      brand: "Azaraa Signature",
      title: "Silk Loom Bangles",
      price: 12500,
      alt: "Silk thread bangles with crystal work",
      hoverAlt: "Assorted silk thread bangles"
    },
    {
      id: 6,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8nKuIdC80uxyQlI8-pOtnVXKIuh-19REeE1njNc8agUKijsjoaYHT3NxzZAE2FsKoa2WOsPbFK3tIur8vNE9b-roswDGwXuQo-211VjaZl6AlBgB5DOvpyMtc-z43qOL37ibEpkGFPS2aIT76kTv1KQTJZZC9HG0GQ9BEuw4WfsfCPsnQeJtfkV9rX_QNGid2WiFBAq2SpYwhTdpt4SU8ttPz5gsos4HjcQnotpqViiOMXew2MTgUPf5_rGofJnkHXurJTXYYPEU",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl4i18CUz9949c2rNEOILXyLqBL-fuA4NW3IQ2RIEowmWcDDB7HHbe1VhwZfaXjlVpS05LUockS4xYS4RhKF8JTO1HhxN8Sy3D1Y52Ia1VeEzSwkWHcqA5SdO9ZdjQSnlQY3d69Wn62GhqzuL-M4Th2Q3Bjg7YquxTLvtYbKdMlW1WvvhdHhvHasbJ5hkWqPIFZYxIAItDMdZqHo_X-6ZL68-gkd6TEa5jzMaJjMb1_2TDXyCrPBoeRFM7pwfeC2hb42GrzV3cx60",
      brand: "Anita Dongre",
      title: "Royal Ruby Maangtikka",
      price: 35000,
      alt: "Oversized Maangtikka with rubies",
      hoverAlt: "Model wearing oversized Maangtikka"
    },
    {
      id: 7,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZRu8fycTcmpDYQKY0Qzcmn67gZGHxYu736QuCt2iXnFOdPizlplqQ5dz5miFPzJP7yNNiVNSWLy_4DfxAJgfFgRFjIWwZi3-WKhOE3FUAXtmX8IYhpct0FN0F49ccbuI1Zg3FnNxE9ytso93vefZaXjOycCFTGaDSEDDUdYG5pCuW7SxUngqpwKCTShExbzdJwOkQv6CKJgfx_mgTIsmXuPBOpg75_kdR2U1tjKEyihGsKKUlxTnm1rK86RwSIUKGdeFUrTyHRP8",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvh0EaFkXxphnktdoVCd0sxvzrLpFf1q6X8oC_4HxrCm_I4-2Bw35jmUcp5gXsPjHPI-gun-bv14JMtISMtbp_xnxlLQRp2085J_v4Gyd5jTqA6rzYKXrFqs40YTllyFiRSfFQqr_pXDxG2Lj9FZtCA_xWeAkUvsAWCtyMIMMTXfwIdLrVM6WdKp_MWZS_plBtfVmqSbHRXc4JpLxZZNcaFqx6KYR0FtmS91Iaxf_lKJuDlZ0fHteoycrP4K7hQWyDTpiA2kvBmHE",
      brand: "Heritage Collection",
      title: "Maharani Polki Choker",
      price: 4850,
      alt: "Traditional Kundan gold necklace with heavy emerald stones",
      hoverAlt: "Close up detail of intricate gold engraving on jewelry"
    },
    {
      id: 8,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB51eQa2lmO_RujSQZg0E7zcf89-Q8-PBpjBM7b2y2-HinxX4ECOgi4igPwUhgi1AODw5vXHmDb9H3QqN_l0u7PGXrP3MD7VCJsZizabXT3gwoWijZc4j5HpyN_1iQFCGWyVeWvqSsLdTJup1Y5sZOi5_dOW5uuDHex9I4El9Op7XV81IvEW0lw4qkhDsZnSlfvPfgLA_l-cCrjRppgtyJiqILsW2TCZlvti_q7AKJhWToyuZSXX1AENUSQGLnRDaNGjJMJIFG6Wl0",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ0MJ54-1dAJkhA3VjZvTTO4t3SZizhK2_SyBMq_r3GSQnA_ocsSA6KEP3lNlnZiHnUkr9RadqHFeuApBByMeJB2_opZjD_PD6iE0llJO2ODI4v0CgGWPuJOwj0WQPVMTS7Clume1F0cdTfa4DfHgMdtTiEARkYAuxuVqWNNOdWU7d3c5ceD1NGmCN5Fr-dmwyJhGxjmBd0NQEm75VfK7swCxRkG2NTlgKJazgb4xibHFu6SKJ2dKbJKznIjS9RxVwxqUvuYb91M0",
      brand: "Earrings",
      title: "Temple Glow Jhumkas",
      price: 1290,
      alt: "Elegant gold jhumka earrings with pearl drops",
      hoverAlt: "Model wearing traditional gold earrings in luxury setting"
    },
    {
      id: 9,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiJrE0T32bs4Ijx8yKkc7oQf2_FvQqPq5ex9anVAMYeZjnFyTFwkxzvZOdd-11hJpf87wgcUjI4IvU8SLmMYyR9bI43dOM46zgT2mF0oYhXv2t687CM8U-d44oGKU63crD2n3eknheumLX7-WCP93ibuEch_dYXVRnMBHa13_sGtQ4DxRdAW2NqWswypvyiS70_nWGEBrsOpX1KIPnsU0WpLFcNzYLefCr-gXE3j0ffnhGK5BJJrpKYvJhcU0JwDMrFtaQEX-fKgY",
      hoverImage: null,
      brand: "Bangles",
      title: "Royal Silk Weave Set",
      price: 780,
      alt: "Intricate multi-layered gold silk thread bangles",
      hoverAlt: null
    },
    {
      id: 10,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFFHBi0Y-DqlfB2ax75CiINPWi8RBghD2qx6rgkPr5KNOkhfj3FdUXj4esQmPkU7H1ZphpcQ8VknnzlW4do8gJSvWiPP2T50FOk3PgenYCBVP3mkHQlaWGRcfJ2BIZ2NybmDdzU-0nKtvx_U-Y0ffbVRYU-Kzsf1643loxpLfzcV2gAow_2KopPaL_1Vdf2cqkNdoDJzjqQnrUwEO46sCQ5w6VWsKbs9RgZSSiPT5t6WtIUheDhxZNyL92j0zWHPo0phiG1d-i3Fw",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeOxSJNLOvmgN5m_SWG6rXjG9ZAnNwwy3PTEYMa8jBfMt0V2O4h5pPznRXlcQmt6VOLVwFaGYDd70JgjOCkHE33Rrg2rj8ul80n1fhFsAYf6o1EUlNxs65pwt29lPpCeQTQ-XVz20mnWWclK9SuqBasaAqG2VycMnDY39RrKx2OSLaIBdB4SOhU8BlH7nv1GTNFAglp8epqcIC8FzpX9Q4GPru7bq8OhyHgcE-X84rBHX0n4ldFJPcRC8DvsrC5w2z1OzUgmDckUk",
      brand: "Temple Art",
      title: "Divine Kaveri Haar",
      price: 8100,
      alt: "Opulent gold temple necklace set with rubies",
      hoverAlt: "Close up of traditional stone setting in gold"
    },
    {
      id: 11,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQuoRMU1FRrcAYQ3O0Ani9o8EltJ_GNBZfouECTf-7etJyVXxqSypDMZIPDhyN-eiRxO-xmSlLcvtmUt7zAlyvret9lVGm8c335EkbbJGkij99EUrFmOD2WNAQER5Q-MSBgoPVB-xnMuiZ4BsyJX1Opw0iJR6iU5ywgRgIMsnhe8eANwNL7-wB0yshQsguo_KeAwkRH0JI9s69DlUmzq2HlWUBBysEZ4_uc1tSRg9CasseHvon5cIFrmFR6XiuC8naa-HJiHOzvLQ",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC86vLY0fLOfA0Q2SDiJYXv-tr0E4mwSmcJ5z45iDtJZH02dXGKQ5xH2ZvdOj9UxUYpQFrucF15cuua1WFbiITxO5WN8RZBtaWZ7MFsBiMypAhCy0yj61OsUNSZzvlKmZGZAtJL_-HWF--W1wefL6F7UfXTWXtLayoBos4aryXVCTYjpLZGPZN_z2BgK43NOTxaHGvYToQV7TUBcvSmyLYJ6qIPWkBvQuTdGowjdngoG1Vi2peWqTOPFMAGHXHGNB1Y91fK4YnQ9mQ",
      brand: "Bridal Signature",
      title: "Basra Pearl Polki Set",
      price: 12400,
      alt: "Traditional Polki diamond necklace with drop earrings",
      hoverAlt: "Lifestyle shot of a woman in luxury ethnic wear and jewelry"
    },
    {
      id: 12,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXhG3Dk-IV-sCqsvNNhF6SDsufffo0SVe6ouDgEYdgWVtJTbAAdGusfca-SdTJpyYaYe1E-Nlq878FhNt39hoyPZaHigowXLsHSAXv8EWkMGvUqnMJn8rFu5Z5JM_ta9njC2fTbWH6abchno03P9vgDLpw-Zhu8GxExtN1TekMIvwwAvyF-ECpOnmrbQYVx7usOvvnc5V_Lkm1Bhi7KwEQOXB2UsbT4hmlIdow-3kWHyluMc5d53h8Q8D7IORnQJ33a1ILDmWQifc",
      hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkspF7YX4j9XfVifJ8HQ3_qjgQkGsUdSPrgFLJVbPCvrlncH5iYxoXbZZVt7GlNIi5t47yz_67O6qVTOUm_eaKrZnzi0L7b2znRAqFxDE6dCzBfd0jZ-NJc9XX17GNfNOX-8fQ-dfFSf_oBHcOXdl2wKltQ7FyTSxbqe-zW3LBeeGk9PKEP4eGdaczgLm89dz42DVVKYtfH7ZOFbEQAV9MyBXILzSyHi8E-OOIbq0zb7Xs6wWfIrz5moFNldlGk8qIOXoACkNJpLc",
      brand: "Bangles",
      title: "Imperial Kundan Kada",
      price: 3150,
      alt: "Modern geometric Kundan bangles in yellow gold",
      hoverAlt: "Details of uncut diamond settings in gold bracelet"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Bridal Masterpieces",
      title: "Maharani Polki Choker",
      price: 425000,
      alt: "Maharani Polki Choker",
      hoverAlt: null
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1610492314412-d44696378e6b?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Heritage Necklaces",
      title: "Sabyasachi Heritage Rani Haar",
      price: 850000,
      alt: "Sabyasachi Heritage Rani Haar",
      hoverAlt: null
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Royal Earrings",
      title: "Jodhpur Meenakari Jhumkas",
      price: 120000,
      alt: "Jodhpur Meenakari Jhumkas",
      hoverAlt: null
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Artisanal Bangles",
      title: "Jaipur Kundan Kada",
      price: 215000,
      alt: "Jaipur Kundan Kada",
      hoverAlt: null
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Statement Rings",
      title: "Opal & Gold Statement Ring",
      price: 95000,
      alt: "Opal & Gold Statement Ring",
      hoverAlt: null
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Heritage Necklaces",
      title: "Emerald Nizam Necklace",
      price: 640000,
      alt: "Emerald Nizam Necklace",
      hoverAlt: null
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Royal Earrings",
      title: "Chandbali Polki Drops",
      price: 185000,
      alt: "Chandbali Polki Drops",
      hoverAlt: null
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Bridal Masterpieces",
      title: "Navratna Bridal Set",
      price: 1200000,
      alt: "Navratna Bridal Set",
      hoverAlt: null
    },
    {
      id: 21,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400",
      hoverImage: null,
      brand: "Artisanal Bangles",
      title: "Rose Gold Silk Bangle",
      price: 45000,
      alt: "Rose Gold Silk Bangle",
      hoverAlt: null
    },
  ];

  useEffect(() => {
    if (!sentinelRef.current || !productColumnRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsEndVisible(entry.isIntersecting);
      },
      {
        root: productColumnRef.current,
        threshold: 1.0,
        rootMargin: '0px'
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [productColumnRef.current]);

  return (
    <>
      <style>{`
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .product-card:hover .hover-image { opacity: 1; }
        .product-card:hover .primary-image { opacity: 0; }
        .product-card:hover .quick-view { transform: translateY(0); opacity: 1; }
        .quick-view { transform: translateY(10px); opacity: 0; transition: all 0.3s ease; }
      `}</style>

      <main className="max-w-8xl mx-auto px-2 md:px-16 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-stone-500 font-sans mb-8">
          <a className="hover:text-primary transition-colors" href="/">Home</a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <a className="hover:text-primary transition-colors" href="/shop">Shop</a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-stone-900 dark:text-primary font-medium">All Collections</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight uppercase">Shop All Jewellery</h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
            Discover a curated collection of handcrafted Indian heritage jewellery, blending timeless tradition with modern elegance. Each piece tells a story of craftsmanship passed down through generations.
          </p>
        </div>

        {/* Sticky Filter & Sort Bar */}
        <div className="sticky top-[90px] z-40 bg-white/95 backdrop-blur-sm border-y border-stone-100 py-4 mb-10 flex flex-wrap px-4 items-center justify-between gap-4 transition-all duration-300">
          <div className="flex items-center gap-6 font-sans text-sm">
            <span className="text-stone-500 uppercase tracking-widest font-bold">{products.length} Results</span>
            <div className="flex items-center gap-2 border-l border-stone-100 pl-6">
              <button className="size-8 flex items-center justify-center text-primary bg-primary/10 rounded">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="size-8 flex items-center justify-center text-stone-400 hover:text-stone-600 transition-colors">
                <span className="material-symbols-outlined">view_list</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest border border-stone-200 px-4 py-2 rounded-lg hover:bg-stone-50 transition-all">
              <span className="material-symbols-outlined text-xl">filter_list</span>
              Filter
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest bg-primary text-white px-6 py-2 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                Sort by: Featured
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative min-h-screen">
          {/* Sidebar Filters */}
          <aside
            ref={asideRef}
            className={`w-full lg:w-1/4 space-y-2 hidden lg:block lg:sticky lg:top-[160px] self-start`}
          >
            <details className="group border-b border-border-gold pb-4" open>
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                <span className="text-sm font-bold uppercase tracking-widest">Shop by Designer</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="mt-2 space-y-3 font-sans text-sm text-stone-600 dark:text-stone-400">
                {['Sabyasachi', 'Anita Dongre', 'Ritu Kumar', 'Tarun Tahiliani'].map((designer) => (
                  <label key={designer} className="flex items-center justify-between cursor-pointer hover:text-primary">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="rounded border-stone-300 text-primary focus:ring-primary"
                        checked={selectedDesigners.includes(designer)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedDesigners([...selectedDesigners, designer]);
                          } else {
                            setSelectedDesigners(selectedDesigners.filter(d => d !== designer));
                          }
                        }}
                      />
                      <span>{designer}</span>
                    </div>
                    <span className="text-xs">{Math.floor(Math.random() * 20)}</span>
                  </label>
                ))}
              </div>
            </details>

            <details className="group border-b border-border-gold pb-4" open>
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                <span className="text-sm font-bold uppercase tracking-widest">Jewellery Type</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="mt-2 space-y-3 font-sans text-sm text-stone-600 dark:text-stone-400">
                {['Chokers', 'Temple Jewellery', 'Long Haars', 'Pendants'].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer hover:text-primary">
                    <input type="checkbox" className="rounded border-stone-300 text-primary focus:ring-primary" />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </details>

            <div className="border-b border-border-gold py-6">
              <span className="text-sm font-bold uppercase tracking-widest mb-6 block">Price Range</span>
              <div className="px-2">
                <div className="h-1 bg-stone-200 rounded-full relative">
                  <div className="absolute inset-y-0 left-0 right-1/4 bg-primary rounded-full"></div>
                  <div className="absolute -top-1.5 left-0 size-4 bg-white border-2 border-primary rounded-full shadow-md cursor-pointer"></div>
                  <div className="absolute -top-1.5 right-1/4 size-4 bg-white border-2 border-primary rounded-full shadow-md cursor-pointer"></div>
                </div>
                <div className="flex items-center justify-between mt-4 font-sans text-xs font-bold text-stone-500">
                  <span>₹0</span>
                  <span>₹1,50,000</span>
                </div>
              </div>
            </div>

            <details className="group border-b border-border-gold pb-4">
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                <span className="text-sm font-bold uppercase tracking-widest">Occasion</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="mt-2 space-y-3 font-sans text-sm text-stone-600 dark:text-stone-400">
                {['Bridal Wear', 'Festive'].map((occasion) => (
                  <label key={occasion} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-stone-300 text-primary focus:ring-primary" />
                    <span>{occasion}</span>
                  </label>
                ))}
              </div>
            </details>

            <details className="group border-b border-border-gold pb-4">
              <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
                <span className="text-sm font-bold uppercase tracking-widest">Metal & Material</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="mt-2 space-y-3 font-sans text-sm text-stone-600 dark:text-stone-400">
                {['Kundan', 'Polki'].map((material) => (
                  <label key={material} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-stone-300 text-primary focus:ring-primary" />
                    <span>{material}</span>
                  </label>
                ))}
              </div>
            </details>
          </aside>

          {/* Product Grid */}
          <div
            ref={productColumnRef}
            className={`w-full lg:w-3/4 ${!isEndVisible ? 'lg:overflow-y-auto lg:custom-scrollbar' : ''}`}
            style={{
              height: !isEndVisible ? `${sidebarHeight}px` : 'auto',
              minHeight: `${sidebarHeight}px`
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 pr-2">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-20 text-center pb-20">
              <button className="font-sans text-sm font-bold uppercase tracking-[0.2em] px-12 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded">
                Load More
              </button>
              <p className="mt-4 font-sans text-xs text-stone-400 tracking-widest uppercase">
                Showing {products.length} of 48 products
              </p>
            </div>

            {/* Sentinel at the very bottom of the product column */}
            <div ref={sentinelRef} className="h-1 w-full" />
          </div>
        </div>

        {/* Custom scrollbar for better UI */}
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #eeaa2b !important;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #d49826 !important;
          }
        `}</style>
      </main>
    </>
  );
}
