import React from 'react'

var GoogleCalendarIframe = React.createClass({
  render: function() {
    return(
      <div>
        <iframe
            src="https://calendar.google.com/calendar/embed?title=Pangyo%20Party%20Default%20Theme&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=m778cvm518nu704db7rukt0sqc%40group.calendar.google.com&amp;color=%2323164E&amp;ctz=Asia%2FSeoul"
            style={{borderWidth:"0"}}
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            />
      </div>
    )
  }
});

const IndexSlider = props => (
<div>
    <section id="main-slider" className="main-slider text-center">
        <div className="">
            <div className="">
                <img src={require("../images/slider/1.jpg")}/>
            </div>
            <div className="slider-text">
                <div className="slide-inner">
                    <h2 className="slider-title"><strong>판교팟</strong>에 오신것을 환영합니다</h2>
                    <p className="slide-description">판교지역 개발자 세미나 모임</p>
                    <div className="slide-btn-container">
                        <a className="btn" href="http://goo.gl/forms/Jvoui4tcbBeQ3g6g1">함께하기</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="introduce" className="portfolio text-center">
        <div className="portfolio-bottom">
            <div className="section-padding">
                <div className="section-top wow animated fadeInUp" data-wow-delay=".5s">
                    <h2 className="section-title"><span>판교팟</span> 소개</h2>
                    <p className="section-description">판교팟은 판교에서 일하는 개발자들의 자체적인 세미나 모임입니다.</p>
                    <p className="section-description">20대 후반의 개발자들로 구성되어 있으며 자기계발을 좋아하는 사람들입니다.</p>
                    <p className="section-description">저희는 서로 하고 싶은 세미나는 하고, 듣고 싶은 세미나는 요청합니다.</p>
                </div>
                <div className="latest-projects wow animated fadeInUp" data-wow-delay=".5s">
                    <div className="itemFilter">
                        <a href="#" >재미</a>
                        <a href="#" >세미나</a>
                        <a href="#" >배움</a>
                        <a href="#" >가르침</a>
                        <a href="#" >토론문화</a>
                        <a href="#" >공유</a>
                    </div>
                    <p className="section-description">저희는 위와 같은 키워드 아래 서로 즐기고 있습니다.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="services" className="services text-center">
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="section-top wow animated fadeInUp" data-wow-delay=".5s">
                        <h2 className="section-title">운영방식</h2>
                    </div>

                    <div className="section-details">
                        <div className="service-details">
                            <div className="col-md-3 col-sm-6">
                                <div className="item wow animated fadeInLeft" data-wow-delay=".5s">
                                    <div className="item-icon">
                                        <i className="fa fa-calendar"></i>
                                    </div>
                                    <div className="item-details">
                                        <h4 className="item-title">모임은 한달에 두번 </h4>
                                        <p className="item-description">
                                            2주차 / 4주차 일요일에 모입니다.</p>
                                        <p className="item-description" style={{'textDecoration':'line-through'}}>
                                            평일은 야근하잖아요<br/>
                                            <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="item wow animated fadeInLeft" data-wow-delay=".35s">
                                    <div className="item-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                    <div className="item-details">
                                        <h4 className="item-title">시간은 5시부터 9시</h4>
                                        <p className="item-description">
                                            1H : Ice Breaking<br/>
                                            2H : Seminar<br/>
                                            3H : Seminar<br/>
                                            4H : Live Coding / Meet<br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="item wow animated fadeInRight" data-wow-delay=".35s">
                                    <div className="item-icon">
                                        <i className="fa fa-money"></i>
                                    </div>
                                    <div className="item-details">
                                        <h4 className="item-title">회비는 월 4만원</h4>
                                        <p className="item-description">
                                            모임 공간을 빌리는 데 사용합니다.
                                        </p>
                                        <p className="item-description" style={{'textDecoration':'line-through'}}>
                                            남은 돈은 월말에 회식비에 보탭니다.<br/>
                                            <br/><br/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="item wow animated fadeInRight" data-wow-delay=".5s">
                                    <div className="item-icon">
                                        <i className="fa fa-group"></i>
                                    </div>
                                    <div className="item-details">
                                        <h4 className="item-title">토론문화</h4>
                                        <p className="item-description">
                                            서로 분야가 다른 개발자들이 모이다보니 하나의 주제로도 열띤 토론을 벌입니다.</p>
                                        <p className="item-description" style={{'textDecoration':'line-through'}}>
                                            싱글턴 하나로 4시간 토론했던건 잊을 수 없는 추억입니다
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h1>
                        &nbsp;<br/>
                    </h1>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonial" className="testimonial text-center" data-stellar-background-ratio="0.1" data-stellar-vertical-offset="0">
        <div className="pattern-overlay">
            <div className="section-padding">
                <div className="container">
                    <div className="section-top wow animated fadeInUp" data-wow-delay=".5s">
                        <h2 className="section-title">VISION</h2>
                    </div>
                    <div className="section-top wow animated fadeInUp" data-wow-delay=".5s">
                        <div id="testimonial-slider" className="testimonial-slider carousel slide" data-ride="carousel">
                            
                            <ol className="carousel-indicators">
                                <li data-target="#testimonial-slider" data-slide-to="0" className="active"></li>
                                <li data-target="#testimonial-slider" data-slide-to="1"></li>
                                <li data-target="#testimonial-slider" data-slide-to="2"></li>
                                <li data-target="#testimonial-slider" data-slide-to="3"></li>
                            </ol>

                            
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <blockquote className="client-quote">
                                        발표를 통해 교류하고 공유하는 문화를 경험하자
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="client-quote">
                                        각자 분야가 다른 개발자들이 모여서 서로의 인사이트를 공유하자
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="client-quote">
                                        사람이라면 가끔씩 하는 상상을 행동으로 옮기면서 즐거움을 찾자
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="client-quote">
                                        좋은 개발문화를 정착시켜 많은 사람들에게 공유함으로써 더 좋은 세상을 만들자
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id="productivity" className="portfolio text-center">
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="section-top wow animated fadeInUp" data-wow-delay=".5s">
                        <h2 className="section-title">Interchange</h2>
                    </div>

                    <div className="section-details">
                        <div className="post-area">
                            <div className="col-md-4">
                                <article className="type-post post wow animated fadeInUp" data-wow-delay=".35s">
                                    <div className="post-thumbnail">
                                        <img src={require("../images/slack.png")} alt="post image"/>
                                    </div>
                                    

                                    <div className="post-content">
                                        <h4 className="entry-title"><a href="#">SLACK</a></h4>
                                        <p className="entry-content">
                                            빠른 의사소통과 개발도구간의 연계
                                        </p>
                                    </div>
                                </article>
                            </div>

                            <div className="col-md-4">
                                <article className="type-post post wow animated fadeInUp" data-wow-delay=".55s">
                                    <div className="post-thumbnail">
                                        <img src={require("../images/drive.png")} alt="post image"/>
                                    </div>

                                    <div className="post-content">
                                        <h4 className="entry-title"><a href="#">GOOGLE DRIVE</a></h4>
                                        <p className="entry-content">
                                            우리의 소중한 세미나 자료 보관
                                        </p>
                                    </div>
                                </article>
                            </div>

                            <div className="col-md-4">
                                <article className="type-post post wow animated fadeInUp" data-wow-delay=".75s">
                                    <div className="post-thumbnail">
                                        <img src={require("../images/github.png")} alt="post image"/>
                                    </div>

                                    <div className="post-content">
                                        <h4 className="entry-title"><a href="#">GITHUB</a></h4>
                                        <p className="entry-content">
                                            아주 작은 규모의, 하지만 재밌는 프로젝트 진행
                                        </p>
                                    </div>
                                </article>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" className="about">
        <div className="about-top">
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="section-top wow">
                            <h2 className="section-title text-center">Contact</h2>
                        </div>

                        <div className="col-md-6">
                            <div className="know-about-us wow">
                                <h2 className="section-title"><span>다양한 분야</span>를 원합니다.</h2>
                                <p className="description">
                                    함께 인사이트를 키워나가고 싶습니다
                                </p>
                                <div className="know-about-us wow ">
                                    <h2 className="section-title"><span>다양한 사람</span>을 원합니다.</h2>
                                    <p className="description">
                                        함께 성장하고 싶습니다
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="section-title"><span>NAME&nbsp; : </span>김남훈</h2>
                            <h2 className="section-title"><span>EMAIL : </span>pangyoparty@gmail.com</h2>
                            <h2 className="section-title"><span>PHONE : </span>010 - 3901 - 6292</h2>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="calendar" className="portfolio text-center">
        <div className="portfolio-bottom">
            <div className="section-padding">
                <div className="section-top wow animated fadeInUp" data-wow-delay=".5s">
                    <h2 className="section-title">일정</h2>
                    <GoogleCalendarIframe />
                </div>
            </div>
        </div>
    </section>

</div>
);


export default IndexSlider;