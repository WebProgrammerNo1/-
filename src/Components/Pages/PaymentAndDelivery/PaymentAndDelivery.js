import React from 'react'
import Footer from '../../Footer'
import GreenRegister from '../../GreenRegister/GreenRegister'
import Header from '../../Header'
import PaymentAndDeliveryWrapper from './PaymentAndDeliveryWrapper'
import image from '../../../images/4228126.png'
import image1 from '../../../images/image 23.png'

const PaymentAndDelivery = ({ size, sizelike }) => {
  return (
    <>
        <Header sizelike={sizelike} size={size}/>
        <PaymentAndDeliveryWrapper>
            <div className="containers">
                <div className="PaymentAndDelivery">
                    <h1 className='my-3'>Оплата и доставка</h1>
                    <div className="d-flex">
                        <div className="me-3 w-50">
                            <img className="w-100" src={image} alt="" />
                            <img className=" mt-3 w-100" src={image1} alt="" />
                        </div>
                        <ul className=" ms-3 paragrf">
                            <li>
                                <h2>Удобно, выгодно и безопасно</h2>
                                <p>МЕГА ДОМ - самый большой интернет-магазин мебели в Украине. Здесь можно найти любую мебель, которая поможет вам воплотить самые смелые мечты и пожелания в интерьере, создать настоящий уют.
                            <br/> Мы предлагаем продукцию по приятной цене и предоставляем выгодные условия доставки и сборки. Оформляйте заказ на сумму от 10 000 грн. и гарантировано получайте бесплатную доставку и сборку в Харькове, Полтаве, Днепре, Одессе и Львове.
                            На всю продукцию предоставляется гарантия от 12 до 18 месяцев </p>
                            </li>
                            <li>
                                <h2>Наша цель — счастливые клиенты</h2>
                                <p>Мы знаем, что мебель способна сделать жизнь комфортнее, приятнее и ярче. Поэтому и поиск необходимой мебели должен быть легким, быстрым и удобным. Мы помогаем найти то, что нужно именно Вам, в одном месте. Все заботы мы берем на себя, исполняем ваши желания и гарантируем сервис, который делает вашу жизнь счастливее.</p>
                            </li>
                            <li>
                                <h2>Осуществлять мечты легко</h2>
                                <p>Мы работаем по всей Украине, сотрудничаем с ведущими производителями мебели, чтобы вы могли легко подобрать любую мебель. Мы хотим, чтобы наши клиенты получали лучший сервис, поэтому реализуем комплексный подход: доставка, сборка, гарантийное обслуживание.</p>
                            </li>
                            <li>
                                <h2>Удобная доставка</h2>
                                <p>Любой товар можно заказать с доставкой. Все комплексные заказы на сумму от 10 000 грн. мы доставляем и собираем бесплатно и оперативно.
                                При наличии мебели на складе, доставка и сборка по Харькову - в течение суток, по Украине - в течение 3 рабочих дней. Всё — с минимальной предоплатой, если необходимо — в рассрочку или кредит. Возможна, как безналичная, так и наличная оплата - выбор за вами..</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </PaymentAndDeliveryWrapper>
        <GreenRegister/>
        <Footer/>
    </>
  )
}

export default PaymentAndDelivery
