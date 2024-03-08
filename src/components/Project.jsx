const Project = ({ imgProject, title, text, number, paragraph, article1, article2, article3 }) => {

    return (
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3" >
            <div className="card" >
                <img src={imgProject} className="card-img-top" width={'100%'} height={100} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target={`#project${number}Info`}>View More</a>
                    <div className="offcanvas offcanvas-bottom h-100" tabindex="-1" id={`project${number}Info`} aria-labelledby={`project${number}Title`}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id={`project${number}Title`}>Project {number}</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div id={`carouselProject${number}`} className="carousel slide shadow d-flex justify-content-center " data-bs-ride="carousel" data-bs-touch='true'>
                                <div className="carousel-inner">
                                    <div className="carousel-item h-100 active" data-bs-interval="2000">
                                        <img src={article1} className="d-block w-80" alt="image slide 1" />
                                    </div>
                                    <div className="carousel-item h-100" data-bs-interval="2000">
                                        <img src={article2} className="d-block w-80" alt="image slide 2" />
                                    </div>
                                    <div className="carousel-item h-100 align">
                                        <img src={article3} className="d-block w-80 " alt="image slide 3" />
                                    </div>
                                </div>
                                <button className='carousel-control-prev' type='button' data-bs-target={`#carouselProject${number}`} data-bs-slide="prev">
                                    <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                                    <span className='visually-hidden'>Previous</span>
                                </button>
                                <button className='carousel-control-next' type='button' data-bs-target={`#carouselProject${number}`} data-bs-slide="next">
                                    <span className='carousel-control-next-icon' aria-hidden="true"></span>
                                    <span className='visually-hidden'>Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project