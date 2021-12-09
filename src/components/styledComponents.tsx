import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 980px;
    margin: 0 auto;
    background-color: inherit;
`;

export const H1 = styled.h1`
    font-size: 2.5rem;
    font-style: italic;
    font-weight: 700;
    text-shadow: 3px 2px #f8f5f5;
    cursor: default;
`;

export const H2 = styled.h2`
    margin-top: 15px;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: default;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    row-gap: 25px;
`;

export const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 40px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 3px 3px #949494;
`;

export const ItemInfo = styled.div`
    width: 30%;
    border-right: 2px solid #4e4e4e;
`;

export const ItemComponent = styled.div`
    width: 70%;
    padding-left: 40px;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemName = styled.div`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const ItemDescription = styled.div`
    font-size: 1.2rem;
    font-style: italic;
    opacity: 0.8;
`;

export const PopperContent = styled.div`
    background: #333;
    color: #fff;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
`;

export const Toggler = styled.div`
    padding: 10px 25px;
    font-size: 1rem;
    color: #000;
    cursor: pointer;
    background-color: #fff;
    width: fit-content;
    border-radius: 5px;
    box-shadow: 5px 5px 10px #c9c9c9, inset -5px -5px 8px -4px #c9c9c9, -5px -5px 10px #fdfdfd,
        inset 5px 5px 8px -4px #fdfdfd;

    :active {
        box-shadow: 5px 5px 10px #c9c9c9, inset -5px -5px 8px -4px #c9c9c9, inset -6px -6px 8px 0 #fdfdfd,
            -5px -5px 10px #fdfdfd, inset 5px 5px 8px -4px #fdfdfd, inset 6px 6px 8px 0 #c9c9c9;
    }
`;

export const PageHeader = styled.div`
    padding: 50px 0;
`;
