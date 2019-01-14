import React from "react";
import {SideMenu} from 'react-sidemenu';
import "./style.css";

function SideMenu() {
return (
    <SideMenu>
    <Item divider={true} label="Parts" value="parts"/>
    <Item label="Add Parts" value="add parts" icon="fa-search"/>
    <Item label="Get Parts" value="get parts" icon="fa-search"/>
    <Item divider={true} label="Kits" value="kits"/>
    <Item label="BOMS" value="boms" icon="fa-search"/>
    <Item label="Parts Kits" value="parts kits" icon="fa-search"/>
    <Item divider={true} label="Search" value="search"/>
    <Item label="Stock Search" value="stock search" icon="fa-search"/>
    <Item label="Transactions" value="transactions" icon="fa-search"/>
</SideMenu>
)
}

export default SideMenu;