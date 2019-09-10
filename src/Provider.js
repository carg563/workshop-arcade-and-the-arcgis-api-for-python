import React from "react";
import CalciteThemeProvider from "calcite-react/CalciteThemeProvider";
import Button from 'calcite-react/Button';
import TopNav, {
    TopNavBrand,
    TopNavTitle,
    TopNavList,
    TopNavLink,
    TopNavActionsList
} from "calcite-react/TopNav";

const Provider = ({ children }) => {
    return (
        <CalciteThemeProvider>
            <TopNav>
                <TopNavBrand href={getLink(0)} src="/static/assets/esri-logo-black.svg" />
                <TopNavTitle href={getLink(0)}>Arcade & ArcGIS API for Python</TopNavTitle>
                <TopNavList>
                    <TopNavLink href={getLink(0)} active={isActive([0, 14])}>Intro</TopNavLink>
                    <TopNavLink href={getLink(15)} active={isActive([15, 15])}>Login Details</TopNavLink>
                    <TopNavLink href={getLink(16)} active={isActive([16, 37])}>Python</TopNavLink>
                    <TopNavLink href={getLink(38)} active={isActive([38, 41])}>Benefits</TopNavLink>
                    <TopNavLink href={getLink(42)} active={isActive([42, 47])}>Tasks</TopNavLink>
                    <TopNavLink href={getLink(48)} active={isActive([48, 91])}>Arcade</TopNavLink>
                    <TopNavLink href={getLink(91)} active={isActive([92, 1000])}>Resources</TopNavLink>
                </TopNavList>            
            </TopNav>
            {children}
        </CalciteThemeProvider>
    );
};

const getLink = slide => {
    if (typeof window === 'undefined') {
        return '#';
    } else {
        return `${window.location.origin}/${slide}`;
    }
}

const isActive = range => {
    if (typeof window === 'undefined') {
        return false;
    } else {
        const page = Number(window.location.pathname.substring(1));
        return page >= range[0] && page <= range[1];
    }
}

export default Provider;
