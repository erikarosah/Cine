import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { Header } from '../../components/header';
import { Container, Content, Image } from './style';

export function Home() {
  return (
    <Container>
      <Header />
      <h2>Em alta</h2>
      <Content>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image
              src="https://occ-0-2401-1123.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXDtAHEsLzQMsGdJWt7MITtyjk0JsnMxRFCwNp7jb50jXF6cqkzFtNPg_O8XcXb3q4U_vgYPSk5PrG_V0zq9tB71vgA22_QDETcyt_dHgR280ANI9sxAVDnXeam0feNRUyUS7R96vaWLM40PDG7buKoRNwuR0DZhogA3XynsAhQwYE77e5YbZuiofMaFd6OVKDm6GpFuWtzxSaWfSApB_PnqnnOmqYB3Q0Nn8SxyUwTOie8QOaVYL18R_ZRA35BJ4mUoloJnFqWuf_DMPR679qP_QhswI3fVRQNIhjioF4QCYVRUM96YmddMKAOEzULJSQ3euTQ6M0GMxLWAuZRjX-QTFrU6pa1CZJuR9lJEMD4.jpg?r=4f1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://occ-0-2401-1123.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXDtAHEsLzQMsGdJWt7MITtyjk0JsnMxRFCwNp7jb50jXF6cqkzFtNPg_O8XcXb3q4U_vgYPSk5PrG_V0zq9tB71vgA22_QDETcyt_dHgR280ANI9sxAVDnXeam0feNRUyUS7R96vaWLM40PDG7buKoRNwuR0DZhogA3XynsAhQwYE77e5YbZuiofMaFd6OVKDm6GpFuWtzxSaWfSApB_PnqnnOmqYB3Q0Nn8SxyUwTOie8QOaVYL18R_ZRA35BJ4mUoloJnFqWuf_DMPR679qP_QhswI3fVRQNIhjioF4QCYVRUM96YmddMKAOEzULJSQ3euTQ6M0GMxLWAuZRjX-QTFrU6pa1CZJuR9lJEMD4.jpg?r=4f1"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Content>
    </Container>
  );
}
