import React from 'react';
import { Formik, Form, Field } from 'formik';
import axiosClient from '../utils/axios';
import { withSnackbar } from 'notistack';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const phoneRegExp = /^(5)([0-9]{2})s?([0-9]{3})s?([0-9]{2})s?([0-9]{2})$/

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Lütfen adınızı ve soyadınızı giriniz.')
        .max(20, 'Ad ve Soyad çok uzun!')
        .required('Lütfen adınızı ve soyadınızı giriniz.'),
    corporation: Yup.string()
        .min(2, 'Lütfen kurum adınızı giriniz.')
        .max(25, 'Kurum adı çok uzun!')
        .required('Lütfen kurum adınızı giriniz.'),
    mail: Yup.string().email('Lütfen geçerli bir email adresi giriniz.').required('Lütfen email adresinizi giriniz'),
    phone: Yup.string().matches(phoneRegExp, 'Lütfen telefon numaranızı istenilen formatta giriniz.').required('Lütfen bir telefon numarası giriniz.'),
});

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                name: "",
                corporation: "",
                phone: "",
                mail: "",
                kvkk: "",
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
            .post("/api/contact", data)
            .then(function (response) {
                toast("Formunuz başarıyla gönderildi!", {
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
            <div>
                <Formik
                    initialValues={this.state.formValue}
                    validationSchema={SignupSchema}
                    onSubmit={(data, { resetForm }) => {
                        this.postContactForm(data, resetForm);
                    }}
                >
                    {({ errors, touched }) => (

                        <Form>
                            <div className="form-row row">
                                <div className="form-group col-6">
                                    <Field name="name" placeholder="Yetkili Kişi Ad Soyad" style={{ width: "100%" }} />
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="form-group col-6">
                                    <Field name="corporation" placeholder="Kurum Adı" style={{ width: "100%" }} />
                                    {errors.corporation && touched.corporation ? (
                                        <div>{errors.corporation}</div>
                                    ) : null}
                                </div>
                                <div className="form-group col-6">
                                    <Field name="mail" type="email" placeholder="Email" style={{ width: "100%" }} />
                                    {errors.mail && touched.mail ? <div>{errors.mail}</div> : null}
                                </div>
                                <div className="form-group col-6">
                                    <Field name="phone" type="tel" placeholder="(5__) ___ __ __" style={{ width: "100%" }} />
                                    {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                                </div>
                                <div className="form-group col-12">
                                    <p>
                                        Ürün, hizmet ve kampanyaların reklam amaçlı sunulabilmesi için kişisel
                                        verilerimin işlenmesine ve tarafıma tanıtım ve reklam içerikli ticari
                                        elektronik ileti gönderilmesine;
                                    </p>
                                    <div className='d-flex mb-2'>
                                        <label style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                                            <Field name="kvkk" type="radio" value="1" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                                            <span class="sec-blue">İzin veriyorum.</span>
                                        </label>
                                        <label style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                                            <Field name="kvkk" type="radio" value="0" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                                            <span class="sec-blue">İzin vermiyorum.</span>
                                        </label>
                                    </div>
                                    <p>
                                        “Vereceğiniz kişisel bilgileriniz hizmet verilmesi amacıyla sizinle iletişime geçilmesi
                                        süreçlerinde tarafımızca işlenecektir. Kişisel Verilerin Korunması ve İşlenmesi
                                        Politikası metnine <a href="/kurumsal/kisisel-verilerin-korunmasi-ve-islenmesi-politikasi" >buradan</a> ulaşabilirsiniz.”
                                    </p>
                                </div>
                            </div>
                            {this.state.loading ? <button type="submit" className="btn btn-primary" style={{ color: "white" }} disabled>Gönderiliyor...</button> : <button type="submit" className="btn btn-primary" style={{ color: "white" }}>Gönder</button>}
                        </Form>
                    )}
                </Formik>
                <Toaster />
            </div>
        )
    }
}

export default withSnackbar(ContactForm);