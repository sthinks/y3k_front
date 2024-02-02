// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';
import PageHeader from "../shared/PageHeader";

const breadcrumb = [
    { title: 'Anasayfa', url: '/' },
    { title: 'Hakkımızda', url: '' },
];

class SitePageAboutUs extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        }
    }


    render() {
        return (
            <div className="block about-us">
                <Helmet>
                    <title>{`Hakkımızda — ${theme.name}`}</title>
                </Helmet>

                <PageHeader breadcrumb={breadcrumb} header="Hakkımızda" />

                <div>
                    <img src='/images/hakkimizda.png' style={{ width: "100%", display: "block", height: "auto" }} />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mt-4">
                            <h1>Bizi Yakından Tanıyın</h1>
                        </div>
                        <div className="col-md-8 mt-4">
                            <p style={{ fontSize: "20px" }}>Sektördeki kaliteli ve güvenilir ürün ihtiyacını karşılamak için çalışıyoruz.
                                Kurulduğumuz 2005 yılından bu yana ürün gamımıza kattığımız her bir markayı
                                titizlikle seçiyor ve her yıl sektörün ihtiyaçları doğrultusunda portföyümüze
                                yeni markalar kazandırıyoruz. İş ortaklarımızı rakiplerinden ayrıştırabilecek,
                                Türkiye’nin en güçlü ürün ve çözüm portföyünü sunmak için var gücümüzle
                                çalışıyoruz.
                            </p>
                        </div>
                        <div className='col-md-4 mt-5'>
                            <img src='/images/hakkimizda-image.jpg' style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                        <div className="col-md-8 mt-5">
                            <h3 className='mb-3'>Neden Y3K?</h3>

                            <div style={{ borderLeft: "1px solid #d7d8d6", paddingLeft: "0.75rem" }}>
                                <ul>
                                    <li>Tedarik ve dağıtım alanında verdiğimiz hizmetlerle sektörde lider güvenlik teknolojileri distribütörü ve güvenilir iş ortağıyız.</li>
                                    <li>Securitas grup şirketiyiz. 1934 yılında İsveç’te kurulan Securitas, bugün toplam 47 ülkede, uzman güvenlik hizmetlerinden teknolojik çözümlere, danışmanlıktan araştırmaya kadar uzanan geniş hizmet yelpazesi ve 345 binin üzerinde çalışanı ile hizmet vermektedir.</li>
                                    <li>Y3K olarak hizmetlerimiz; ithalat, dağıtım, satış öncesi destek ve ihtiyaç durumunda satış sonrası destek hizmetlerinden oluşuyor.</li>
                                    <li>Tüm fonksiyonlarımızla birlikte, İstanbul merkez, Ankara bölge ofisimiz olmak üzere 4000 m² çalışma alanında hizmet veriyoruz.</li>
                                    <li>Elektronik güvenlik sistemlerinde kalitesi kanıtlanmış 30’dan fazla uluslararası markanın Türkiye distribütörlüğünü yapıyoruz. Bu sayede proje firmalarının, doğru ürünü bulma, zamanında ve en uygun koşullarla tedarik edebilme gereksinimlerine en iyi şekilde yanıt veriyoruz.</li>
                                    <li>Ürün yelpazemiz; video izleme ve yönetim sistemleri, fiziksel ve biyometrik geçiş kontrol sistemleri, kilit ve kapı aksesuarları, aydınlatma sistemleri, veri depolama, aktarım ve iletim sistemleri, alarm sistemleri gibi elektronik güvenlik sistemlerinden oluşuyor.</li>
                                    <li>Satış sonrası destek hizmetimiz ile ihtiyaç duyulması durumunda garanti kapsamında ya da dışında oluşabilecek sorunlarda iş ortaklarımızı yalnız bırakmıyor, çözüm sunuyoruz.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-12 mt-5'>
                            <h3>İşimize Yaklaşımımız</h3>
                            <p className='mt-3'>İş ortaklarımızı kaliteli ürünler, kaliteli hizmet ve 20 yıla yakın tecrübemizle destekleyerek büyümelerine katkı sağlamayı ve bu sayede toplam pazarın sürdürülebilir ve sağlıklı büyümesine destek olmayı hedefliyoruz.</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default SitePageAboutUs;
