import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

/*svg icons*/
import { HomeSvg } from '../svg/HomeSvg';
import { ExtractSvg } from '../svg/ExtractSvg';
import { TransferSvg } from '../svg/TransferSvg';
import { PaymentsSvg } from '../svg/PaymentsSvg';
import { CreditCardSvg } from '../svg/CreditCardSvg';
import { CreditSvg } from '../svg/CreditSvg';

const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width:100%;
    background: #242424;
    color: #f8f8f8;
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        height: 250px;
        overflow-Y: auto;
        &::-webkit-scrollbar-thumb {
            background: #242424;
            outline: 1px solid #777777;
            border-radius: 2px;
        }
        &::-webkit-scrollbar {
            width: 6px;
        }
        li {
            font-weight: 400;
            font-size: 1.2rem;
            width: 100%;
            display: flex;
            list-style: none;
            border: solid 4px transparent;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            &:hover {
                background: #888;
                border-left-color: #fffb19; 
                cursor: pointer;
            }
        }
        span {
            display: flex;
            align-items: center;
            line-height: 60px;
            margin-left: 20px;
            & > span {

            }
        }
    }
`

export default function Menu() {
    return (
        <MenuContainer>
            <ul>
                <li>
                    <Link href="/">
                        <span>
                            <HomeSvg /> <span>Início</span>
                        </span>
                    </Link>
                </li>
                <li>
                        <Link href="/">
                            <span>
                                <ExtractSvg /> <span>Extrato</span>
                            </span>
                        </Link>
                </li>
                <li>
                    <Link href="/">
                            <span>
                                <TransferSvg /> <span>Transferências</span>
                            </span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <span>
                            <PaymentsSvg /> <span>Pagamentos</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <span>
                            <CreditCardSvg /> <span>Cartões</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <span>
                            <CreditSvg /> <span>Crédito</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </MenuContainer>
    )
}
