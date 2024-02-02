export default [
    {
        title: 'Hakkımızda',
        url: '/hakkimizda'
    },
    {
        title: 'Markalarımız',
        url: '/markalarimiz',
    },
    {
        title: 'Hakkımızda',
        url: '/bilgi-guvenligi',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Bilgi Güvenliği', url: '/bilgi-guvenligi' },
                {
                    title: 'İş Ortağı Davranış Kuralları Tüzüğü', url: "https://images.bayipro.com/y3k.com.tr/Images/Content/Securitas%20%C4%B0%C5%9F%20Orta%C4%9F%C4%B1%20Davran%C4%B1%C5%9F%20Kurallar%C4%B1%20T%C3%BCz%C3%BC%C4%9F%C3%BC.pdf", props: {
                        external: true,
                        target: '_blank',
                    },
                },
                { title: 'KVKK', url: '/kvkk' },
                {
                    title: 'Etik Kod', url: "https://images.bayipro.com/y3k.com.tr/Images/Content/Securitas%20Etik%20kod.pdf", props: {
                        external: true,
                        target: '_blank',
                    },
                },
                { title: 'Çerez Politikası', url: '/cerez-politikasi' },
            ],
        },
    },
    {
        title: 'Kurumsal',
        url: '/hakkimizda',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Hakkımızda', url: '/hakkimizda', },
                { title: 'İnsan Kaynakları', url: '/insan-kaynaklari' },
            ],
        },
    },
    {
        title: 'İletişim',
        url: '/iletisim',
        props: {
            external: true,
        },
    },
];
