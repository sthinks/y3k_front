import React from 'react';
import { Formik, Form, Field } from 'formik';
import axiosClient from '../utils/axios';
import { withSnackbar } from 'notistack';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import PageHeader from '../shared/PageHeader';
import { Helmet } from 'react-helmet-async';

const breadcrumb = [
    { title: 'Anasayfa', url: '/' },
    { title: 'Hakkımızda', url: '' },
];

const phoneRegExp = /^(05)([0-9]{2})s?([0-9]{3})s?([0-9]{2})s?([0-9]{2})$/

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Lütfen adınızı ve soyadınızı giriniz.')
        .max(20, 'Ad ve Soyad çok uzun!')
        .required('Lütfen adınızı ve soyadınızı giriniz.'),
    mail: Yup.string().email('Lütfen geçerli bir email adresi giriniz.').required('Lütfen email adresinizi giriniz'),
    phone: Yup.string().matches(phoneRegExp, 'Lütfen telefon numaranızı istenilen formatta giriniz.').required('Lütfen bir telefon numarası giriniz.'),
});

class SitePageBayilik extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                name: "",
                phone: "",
                mail: "",
            },
            loading: false
        }
    }

    handleChange(event) {
        const formValue = {
            ...formValue,
            [event.target.name]: event.target.value,
        }
        this.setState(formValue);
    };
    postContactForm(data, resetCallback) {
        this.setState({ loading: true })
        axiosClient
            .post("/api/application", data)
            .then(function (response) {
                toast("Bizi tercih ettiğiniz için teşekkür ederiz. Bayilik işlemlerini tamamlamak için en kısa sürede iletişime geçeceğiz.", {
                    duration: 4000,
                    position: 'bottom-center',
                    // Styling
                    style: {
                        backgroundColor: '#031f30',
                        color: '#fff'
                    },
                    className: '',
                    // Custom Icon
                    icon: '✔',
                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: '#fff',
                        secondary: '#fff',
                    },
                    // Aria
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
                resetCallback();
            })
            .catch(function (error) {
                toast("Bir hata oluştu.");
            }).finally(() => {
                this.setState({ loading: false })
            });
    }
    render() {


        return (
            <div style={{ height: "90vh" }}>
                <Helmet>
                    <title>Bayilik Başvurusu</title>
                </Helmet>
                <div className='mb-5'>
                    <PageHeader breadcrumb={breadcrumb} header="Bayilik Başvurusu" />
                </div>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 mb-5">
                            <Formik
                                initialValues={this.state.formValue}
                                validationSchema={SignupSchema}
                                onSubmit={(data, { resetForm }) => {
                                    this.postContactForm(data, resetForm);
                                }}
                            >
                                {({ errors, touched }) => (

                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12">
                                                <Field name="name" placeholder="Ad Soyad" style={{ width: "100%" }} />
                                                {errors.name && touched.name ? (
                                                    <div>{errors.name}</div>
                                                ) : null}
                                            </div>
                                            <div className="form-group col-12">
                                                <Field name="phone" type="tel" placeholder="Telefon" style={{ width: "100%" }} />
                                                {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                                            </div>
                                            <div className="form-group col-12">
                                                <Field name="mail" type="email" placeholder="Email" style={{ width: "100%" }} />
                                                {errors.mail && touched.mail ? <div>{errors.mail}</div> : null}
                                            </div>
                                        </div>
                                        {this.state.loading ? <button type="submit" className="btn btn-primary" style={{ color: "white" }} disabled>Gönderiliyor...</button> : <button type="submit" className="btn btn-primary" style={{ color: "white" }}>Hemen Başvur</button>}
                                    </Form>
                                )}
                            </Formik>
                            <Toaster />
                        </div>
                        <div className="col-12">
                            <h3 className='mt-5'>Y3K Güvenlik Teknolojileri</h3>
                            <p className='mt-2'>
                                Sektördeki kaliteli ve güvenilir
                                ürün ihtiyacını karşılamak için
                                çalışıyoruz. Elektronik güvenlik
                                sistemlerinde kalitesi kanıtlanmış
                                30’dan fazla uluslararası markanın
                                Türkiye distribütörlüğünü yapıyoruz.
                                Kurulduğumuz 2005 yılından bu yana
                                ürün gamımıza kattığımız her bir
                                markayı titizlikle seçiyor ve her yıl
                                sektörün ihtiyaçları doğrultusunda
                                portföyümüze yeni markalar kazandırıyoruz.
                                Satış sonrası destek hizmetimiz ile ihtiyaç
                                duyulması durumunda garanti kapsamında
                                ya da dışında oluşabilecek sorunlarda
                                iş ortaklarımızı yalnız bırakmıyor,
                                çözüm sunuyoruz.
                            </p>
                            <p>
                                Securitas grup şirketiyiz.
                                1934 yılında İsveç’te kurulan
                                Securitas, bugün toplam
                                52 ülkede, uzman güvenlik
                                hizmetlerinden teknolojik
                                çözümlere, danışmanlıktan
                                araştırmaya kadar uzanan
                                geniş hizmet yelpazesi
                                ve 350 binin üzerinde
                                çalışanı ile hizmet veriyor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withSnackbar(SitePageBayilik);