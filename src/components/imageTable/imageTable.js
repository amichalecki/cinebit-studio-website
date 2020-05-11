import React, { useState } from 'react';
import Modal from '../modal/modal';
import { MODAL } from '../../MODAL';

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from 'react-device-detect';

 // Image size must be 1920 x 804
function ImageTable(properties) {
    const [toogleModal, setToogleModal] = useState(false);
    const [modalNumber, setModalNumber] = useState(null);
    const [modalData, setModalData] = useState({});
    return ( <>
        <table className="portfolio__table">
            <BrowserView>
                { properties.portfolio.map((pfr, obj) => {
                    if (obj % 3 === 0)
                    { return (
                        <tr>
                            { properties.portfolio.map((image, i) => {
                                if (Math.floor(i / 3) === Math.floor(obj / 3)) {
                                    const wdth = 100 / 3;
                                    const wdth_expression = wdth + '%';
                                    let { src, alt, width, height, originalData } = image;
                                    return (
                                    <td width={wdth_expression}>
                                        <div
                                        key={i}
                                        className="img__wrap"
                                        onClick={() => {
                                            setToogleModal(true)
                                            setModalNumber(i)
                                            setModalData(originalData)
                                        }}
                                        >
                                        <img src={src} className="img__props" alt={alt} />
                                        <div className="img__description">
                                            <p className="img__title">{alt}</p>
                                        </div>
                                        </div>
                                    </td>
                                    )
                                }
                            })
                            }
                        </tr>
                        )
                    }
                })
                }
            </BrowserView>
            <MobileView>
                { properties.portfolio.map((image, i) => {
                    const wdth = 100 / 3;
                    const wdth_expression = wdth + '%';
                    let { src, alt, width, height, originalData } = image;
                    return (
                        <tr>
                            <td width={wdth_expression}>
                                <div
                                key={i}
                                className="img__wrap"
                                onClick={() => {
                                    setToogleModal(true)
                                    setModalNumber(i)
                                    setModalData(originalData)
                                }}
                                >
                                <img src={src} className="img__props" alt={alt} />
                                <div className="img__description">
                                    <p className="img__title">{alt}</p>
                                </div>
                                </div>
                            </td>
                        </tr>                        
                    )
                })
                }
            </MobileView>
        </table>

        {toogleModal && <Modal {...MODAL[modalNumber]} data={modalData} setToogleModal={() => setToogleModal(false)} />}
        </>
    )
}

export default ImageTable;