// react
import React from "react";
import * as Yup from "yup";

// third-party
import { Helmet } from "react-helmet-async";

// application
import PageHeader from "../shared/PageHeader";

// blocks
import BlockMap from "../blocks/BlockMap";

// data stubs
import theme from "../../data/theme";
import axiosClient from "../utils/axios";
import { useSnackbar } from "notistack";
import ContactForm from "../commons/ContactForm";

const phoneRegExp = /^(05)([0-9]{2})s?([0-9]{3})s?([0-9]{2})s?([0-9]{2})$/;

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Lütfen adınızı ve soyadınızı giriniz.")
        .max(20, "Ad ve Soyad çok uzun!")
        .required("Lütfen adınızı ve soyadınızı giriniz."),
    mail: Yup.string().email("Lütfen geçerli bir email adresi giriniz.").required("Lütfen email adresinizi giriniz"),
    phone: Yup.string()
        .matches(phoneRegExp, "Lütfen telefon numaranızı istenilen formatta giriniz.")
        .required("Lütfen bir telefon numarası giriniz."),
    message: Yup.string().required("Lütfen bir mesaj gir."),
});

function SitePageContactUs() {
    const { enqueueSnackbar } = useSnackbar();

    const breadcrumb = [
        { title: "Anasayfa", url: "" },
        { title: "İletişim", url: "" },
    ];

    const [formValue, setformValue] = React.useState({
        name: "",
        phone: "",
        message: "",
        mail: "",
    });

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };

    const postContactForm = (data) => {
        axiosClient
            .post("/api/contact", data)
            .then(function (response) {
                enqueueSnackbar("Formunuz başarıyla gönderildi.");
                const res = response.data;
            })
            .catch(function (error) {
                enqueueSnackbar("Bir hata oluştu!");
            })
            .finally(() => {});
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`İletişim — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="İletişim" breadcrumb={breadcrumb} />

            <BlockMap />

            <div className="block mt-5">
                <div className="container">
                    <div className="mb-0">
                        <div className="contact-us">
                            <div className="contact-us__container">
                                <div className="row">
                                    <div className="col-md-4 mt-4">
                                        <div className="contact-us__address">
                                            <p style={{ fontWeight: "bold" }}>İLETİŞİM</p>
                                            <p>
                                                Rüzgarlıbahçe Mah. Çam Pınarı Sk. Smart Plaza No:4 34805 Beykoz/İstanbul
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mt-4">
                                        <div className="contact-us__address">
                                            <p style={{ fontWeight: "bold" }}>SATIŞ</p>
                                            <p>Telefon: +90 216 681 8400</p>
                                            <p>Faks: +90 216 681 8408</p>
                                            <p>E-Mail: satis@y3k.com.tr</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <div className="contact-us__address">
                                            <p style={{ fontWeight: "bold" }}>7/24 TEKNİK DESTEK ÇAĞRI MERKEZİ</p>
                                            <p>Telefon: 444 43 57</p>
                                            <p>Faks: +90 216 681 8408</p>
                                            <p>E-Mail: y3kteknikdestek@securitas.com</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-12 mt-4">
                                        <h1 className="contact-us__header card-title">Bize Ulaşın</h1>
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageContactUs;
