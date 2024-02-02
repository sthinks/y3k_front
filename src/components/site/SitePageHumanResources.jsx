// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';
import PageHeader from '../shared/PageHeader';
const breadcrumb = [
    { title: 'Anasayfa', url: '/' },
    { title: 'İnsan Kaynakları', url: '' },
];

const detay = [
    { title: 'Dürüst', exp: 'Bir Securitas çalışanı dürüsttür. Dürüstlük ilkesi görüşlerini belirtmeyi, uygunsuz durumları bildirmeyi ve bilgi saklamamayı da içerir.', icon: '/images/kalp.png' },
    { title: 'Dikkatli', exp: 'Bir Securitas çalışanı her zaman çevresinde olana bitene dikkat eder ve başkalarının göremediği ayrıntıları fark eder. Çünkü profesyonellik; görmeyi, duymayı ve değerlendirmeyi gerektirir.', icon: '/images/world.png' },
    { title: 'Yardımsever', exp: 'Bir Securitas çalışanı, ihtiyaç duyulduğunda, işiyle doğrudan ilgili olmasa da yardımcı olur. Yaşamı daha huzurlu hale getirmek için müdahale gerektiren bir durum olduğunda muhakkak yardım eder.', icon: '/images/world.png' },
]

class SitePageHumanResources extends React.Component {
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
                    <title>{`İnsan Kaynakları — ${theme.name}`}</title>
                </Helmet>

                <PageHeader breadcrumb={breadcrumb} header="İnsan Kaynakları" />

                <div>
                    <img src='/images/insan-kaynaklari.png' style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className="container">
                    <div className="row">
                        {detay.map((e) => (
                            <div className="col-md-4 mt-5">
                                <div className='insan-kaynaklari-item'>
                                    <div>
                                        <img src={`${e.icon}`} width="32" />
                                    </div>
                                    <div className='mt-3'>
                                        <h4>{e.title}</h4>
                                    </div>
                                    <div className='mt-3'>
                                        <p>{e.exp}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-md-12 mt-5">
                            <h1>İşe Alım</h1>
                        </div>
                        <div className="col-md-12 mt-3">
                            Seçme ve yerleştirme sisteminin temel amacı; şirketimize eğitim düzeyi yüksek, yeniliğe ve değişime açık, dinamik, kendisini ve işini geliştirme potansiyeli olan, çalışan yetiştiren, takım çalışması yapabilen, grubumuzun değerlerini benimseyip sahip çıkacak kişileri kazandırmaktır.
                            Seçme ve yerleştirmede ana ilke, hiçbir ayrım yapmadan ve ayrıcalık tanımadan işin gerektirdiği yetkinliklere (bilgi, beceri, davranış) sahip ve grubumuzun değerlerini benimseyip yaşatacak kişilere eşit fırsat vermektir.
                            İşe alım sürecindeki uygulamaların istisnasız tüm grup şirketlerimizde aynı standartlar içinde gerçekleştirilmesi esastır.
                        </div>
                        <div className="col-md-4">
                            <div className='mt-5'>
                                <h6>Ücret ve Yan Haklar</h6>
                                <ul className='mt-3'>
                                    <li>Ücret ve Ek Menfaatler</li>
                                    <li>Brüt ücret uygulaması</li>
                                    <li>Yemek kartı uygulaması</li>
                                    <li>Özel sağlık sigortası</li>
                                    <li>Hayat sigortası</li>
                                    <li>Yabancı dil ödeneği</li>
                                    <li>Yüksek öğrenim ödeneği</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className='mt-5' style={{ borderLeft: "1px solid #d7d8d6", paddingLeft: "0.75rem" }}>
                                <h6>Gelişim</h6>
                                <p className='mt-3'>Y3K'da, çalışanların gelişmesinin sürekli öğrenme ve bilgilenmeyle sağlanabileceğine inanılır ve öncelikle herkesin sürekli öğrenebileceği, deneyebileceği ve gelişebileceği bir ortamın yaratılması hedeflenir.</p>
                                <p>Kişinin kendini ve işini geliştirmesi, değer yaratması, çalışanın temel sorumluluğu olarak kabul edilir. Yönetim, çalışanların kendi uzmanlık alanları içinde tam olarak bilgilendirilmeleri ve bu bilgiyi kullanarak kendilerini ve işlerini geliştirmeleri amacıyla herkese gerekli olanakları sunmayı ve rehberlik etmeyi sorumluluk olarak benimsemiştir.</p>
                                <p>Tüm insan kaynakları uygulamalarında olduğu üzere eğitim gelişim faaliyetleri de grup şirketlerimizin stratejik hedefleri ve öncelikleri ile ilişkilendirilir. Mevcut ve gelecekteki organizasyonel ve bireysel gereksinimler dikkate alınır, çalışanlarımızın yönetsel ve profesyonel gelişme gereksinimleri bu doğrultuda belirlenir.</p>
                                <p>Eğitim programları kurumsal hedef ve öncelikler ile kişisel gereksinimler gözetilerek gerek içerik, gerek kapsam, gerekse sunuş yöntemleri açısından farklılaştırılır, ihtiyaca yönelik sunulur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SitePageHumanResources;
