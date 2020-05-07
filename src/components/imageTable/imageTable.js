import React from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from 'react-device-detect';

function ImageTable(properties) {
    return (
        <table width="100%" class="portfolio__table">
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
                                        <img src={src} class="img__props" alt={alt} />
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

            </MobileView>
        </table>
    )
}

export default ImageTable;