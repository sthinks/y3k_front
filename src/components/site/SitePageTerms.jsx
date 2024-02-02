// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';

function SitePageTerms() {
    const breadcrumb = [
        { title: 'Home', url: '' },
        { title: 'Terms And Conditions', url: '' },
    ];
    let pageTitle = "İnsan Kaynakları";


    return (
        <React.Fragment>
            <Helmet>
                <title>{`Terms And Conditions — ${theme.name}`}</title>
            </Helmet>

            <PageHeader breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="document">
                        <div className="document__header">
                            <h1 className="document__title">İnsan Kaynakları</h1>
                        </div>
                        <div className="document__content typography">
                            <h4 className="about-us__title">DEĞERLERİMİZ</h4>
                            <p className="text-center">
                                Y3K olarak hedeflerimize ulaşırken ortak
                                değerlerimizle hareket ederiz.
                            </p>
                            <h4 className="about-us__title">ÖNCÜ RUH</h4>
                            <p className="text-center">
                                Bugüne ‘’öncü ruh’’larla geldik. Keşfeden,
                                şekillendiren, yön veren, yol gösteren… Başlangıçtır
                                öncü ruh, izlenecek yolu belirleyen, kuralları koyan.
                            </p>
                            <h4 className="about-us__title">UZMAN</h4>
                            <p className="text-center">
                                Deneyimlerden öğrendik. Kuruluşumuzdan
                                bugüne kadar çok farklı sektörlerde,
                                farklı seviyedeki güvenlik ihtiyaçlarına
                                çözüm sağlayarak geliştik, olgunlaştık.
                                Bugün de yıllar içinde sahip olduğumuz
                                bu eşsiz bilgileri, yetkinliklerimizle
                                birleştirerek müşterilerimize değer
                                sunuyoruz.
                            </p>
                            <h4 className="about-us__title">İNSAN ODAKLI</h4>
                            <p className="text-center">
                                Tarih boyunca her adım,  insanı biraz daha
                                ileriye götürebilmek için atıldı. Adımlar
                                insanı geliştirdi, o geliştikçe adımlar büyüdü.
                                Sensormatic de bu vizyonu benimseyerek,
                                müşteri yada çalışan ayırımı yapmadan, gerçekleştirdiği
                                her eyleminde insanı odağında tutar. Yardımseverdir.
                                Teknolojiyi müşterisinin gereksinimine göre dönüştürür
                                . Çözümü sunacak kadroyu kurar. En yetkin insanlarla
                                insan için çalışır.
                            </p>
                            <h4 className="about-us__title">GÜVENİLİR</h4>
                            <p className="text-center">
                                İnsanoğlunun en temel gereksinimidir
                                güven. Rahatlatır, geleceğe dair umut verir,
                                mutluluk verir. İnsan, yaşadığı çevreye,
                                aldığı hizmete güvenmek ister. İşte biz de,
                                1994’den beri müşterilerimizin güvenine
                                layık olmak için çalışıyoruz. Satışta da
                                satış sonrasında da; bugünden yarına.
                            </p>
                            <h4 className="about-us__title">SORUMLULUK SAHİBİ</h4>
                            <p className="text-center">
                                Hedeflerimizle, sorumluluk bilincimizle,
                                işimizle, değerlerimizle farklıyız.
                                Dürüstüz. Hedef odaklıyız. Başladığımızı
                                bitiririz. Amacımız sadece sonuca ulaşmak
                                değildir. Sonuca ulaşırken verdiğimiz
                                sözleri tam ve zamanında, dikkatle yerine
                                getirmiş olmak, kullandığımız teknoloji
                                ile fark yaratmak, iş ritmimizle örnek
                                olmak isteriz. Çünkü biz işinin ehli,
                                sözünün eriyiz.
                            </p>
                            <h4 className="about-us__title">İŞE ALIM</h4>
                            <p className="text-center">
                                Seçme ve yerleştirme sisteminin
                                temel amacı; şirketimize eğitim
                                düzeyi yüksek, yeniliğe ve değişime
                                açık, dinamik, kendisini ve işini
                                geliştirme potansiyeli olan,
                                çalışan yetiştiren, takım çalışması
                                yapabilen, grubumuzun değerlerini
                                benimseyip sahip çıkacak kişileri
                                kazandırmaktır.
                            </p>
                            <p className="text-center">
                                Seçme ve yerleştirmede ana ilke,
                                hiçbir ayrım yapmadan ve ayrıcalık
                                tanımadan işin gerektirdiği yetkinliklere
                                (bilgi, beceri, davranış) sahip ve
                                grubumuzun değerlerini benimseyip
                                yaşatacak kişilere eşit fırsat vermektir.
                            </p>
                            <p className="text-center">
                                İşe alım sürecindeki uygulamaların
                                istisnasız tüm grup şirketlerimizde
                                aynı standartlar içinde gerçekleştirilmesi
                                esastır.
                            </p>
                            <h4 className="about-us__title">GELİŞİM</h4>
                            <p className="text-center">
                                Kişinin kendini ve işini geliştirmesi,
                                değer yaratması, çalışanın temel sorumluluğu
                                olarak kabul edilir. Yönetim, çalışanların
                                kendi uzmanlık alanları içinde tam olarak
                                bilgilendirilmeleri ve bu bilgiyi kullanarak
                                kendilerini ve işlerini geliştirmeleri
                                amacıyla herkese gerekli olanakları
                                sunmayı ve rehberlik etmeyi sorumluluk
                                olarak benimsemiştir.
                            </p>
                            <p className="text-center">
                                Tüm insan kaynakları uygulamalarında olduğu
                                üzere eğitim gelişim faaliyetleri de grup
                                şirketlerimizin stratejik hedefleri ve
                                öncelikleri ile ilişkilendirilir. Mevcut
                                ve gelecekteki organizasyonel ve bireysel
                                gereksinimler dikkate alınır, çalışanlarımızın
                                yönetsel ve profesyonel gelişme gereksinimleri
                                bu doğrultuda belirlenir.
                            </p>
                            <p className="text-center">
                                Eğitim programları kurumsal hedef
                                ve öncelikler ile kişisel gereksinimler
                                gözetilerek gerek içerik, gerek kapsam,
                                gerekse sunuş yöntemleri açısından
                                farklılaştırılır, ihtiyaca yönelik sunulur.
                            </p>
                            <h4 className="about-us__title">ÜCRET VE YAN HAKLAR</h4>
                            <p className="text-center">
                                Ücret ve Ek Menfaatler
                            </p>
                            <p className="text-center">
                                Brüt ücret uygulaması
                            </p>
                            <p className="text-center">
                                Yemek kartı uygulaması
                            </p>
                            <p className="text-center">
                                Özel sağlık sigortası
                            </p>
                            <p className="text-center">
                                Hayat sigortası
                            </p>
                            <p className="text-center">
                                Yabancı dil ödeneği
                            </p>
                            <p className="text-center">
                                Yüksek öğrenim ödeneği
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageTerms;
