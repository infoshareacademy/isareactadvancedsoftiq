import styled from 'styled-components';

export const Section = styled.section`
    height: 800px;
    background-color: rgb(81, 198, 245);
    color: white;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    background: url(images/background3.png) no-repeat center right;
    padding: 20px;
    margin: 0 auto;
`

export const Heading = styled.h1`
    position: relative;
    left: 100px;
    align-self: center;
    font-size: 80px;
`
export const Box = styled.div`
    position: relative;
    right: 100px;
    height: 70%;
    width: 40%;
    align-self: center;
    text-align: center;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    justify-content: space-between;
`

export const ListItem = styled.li`
    display: block;
    width: 380px;
    margin-top: 18px;
    background-color: #fff;
    box-shadow: 11px 9px 41px -13px rgba(43, 42, 43, 0.51);
`

export const ATag = styled.a`
    position: relative;
    display: flex;
    justify - content: center;
    text - decoration: none;
    box - sizing: border - box;
    padding: 25px 20px 25px 20px;
    align - items: center;
    color: rgb(49, 49, 49);
    font - weight: bolder;
`
export const Img = styled.img`
    height: auto;
    width: 50px;
    box - sizing: content - box;
    position: relative;
    left: 70px;
    padding - left: 20px;
    border - left: 1px solid black;
    translate: ${props => props.isWorld ? 'translateX(-34px)' : 'none'}
`
