import React from "react";

const Advertisements  = () => {
    return (
        <section className="main-advert">
            <div className="main-adrert-left">
                <div className="main-adrert-left-dates">
                    <button className="main-adrert-left-dates__btn" type="button">Soon drop</button>
                    <span className="main-adrert-left-dates__date">Jan 6, 2022</span>
                </div>
                <h1 className="main-adrert-left__title">Discover new NFT</h1>

                <div className="main-adrert-left-data">
                        <div className="main-adrert-left-data-left">
                        <span className="main-adrert-left-data-left__descr">Created by</span>
                        <p className="main-adrert-left-data-left__acc">@jastidesigns</p>
                        </div>
                        <hr />
                        <div className="main-adrert-left-data-right">
                        <span className="main-adrert-left-data-right__descr">Collection</span>
                        <p className="main-adrert-left-data-right__acc">Outcrowd</p>
                        </div>
                </div>
                <div className="main-adrert-left-btns">
                    <button className="main-adrert-left-btns__place">Place a bid</button>
                    <button className="main-adrert-left-btns__view">View NFT</button>
                </div>
            </div>
            <div className="main-adrert-right">
                <img src="/image/nftadvert.svg" alt="" className="main-adrert-right-img"/>
            </div>
        </section>
    )
}

export default Advertisements