import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const PAGES = {
    home: 'home',
    planning: 'planning',
    purchasing: 'purchasing',
    production: 'production',
    harvest: 'harvest',
    integration: 'integration',
    analytics: 'analytics',
};

const Home = () => (
    <div>
        <p>Dashboard</p>
    </div>
);

const Planning = () => (
    <div>
        <h1>Planning</h1>
        <h2>Templates</h2>
        <p>Describe what a template is</p>
        <ul>
            <li>Activity Templates</li>
            <li>Revenue Deductions</li>
            <li>Revenue Deduction Templates</li>
            <li>Transport Costs</li>
            <li>Transport Cost Templates</li>
        </ul>
        <h2>Plans</h2>
        <p>Describe what a plan is</p>
        <ul>
            <li>Plan 1 </li>
            <li>Plan 2 </li>
            <li>Plan 3 </li>
        </ul>
        <h2>Budgets</h2>
        <p>Describe what a Budget is</p>
        <ul>
            <li>Budget 1 </li>
            <li>Budget 2 </li>
            <li>Budget 3 </li>
        </ul>
        <h2>Actuals</h2>
        <p>Describe what an Actual is</p>
        <ul>
            <li>Actual 1 </li>
            <li>Actual 2 </li>
            <li>Actual 3 </li>
        </ul>
        <h2>Reports</h2>
        <h3>Field Plan</h3>
        <ul>
            <li>Report 1 </li>
            <li>Report 2 </li>
            <li>Report 3 </li>
        </ul>
        <h3>Budget Plan</h3>
        <ul>
            <li>Report 1 </li>
            <li>Report 2 </li>
            <li>Report 3 </li>
        </ul>
        <h3>Actuals Plan</h3>
        <ul>
            <li>Report 1 </li>
            <li>Report 2 </li>
            <li>Report 3 </li>
        </ul>
    </div>
);

const Purchasing = () => (
    <div>
        Purchasing
    </div>
);

const Production = () => (
    <div>
        Production
    </div>
);

const Integration = () => (
    <div>
        Integration
    </div>
);

const Harvest = () => (
    <div>
        Harvest
    </div>
);

const Analytics = () => (
    <div>
        Analytics
    </div>
);

class Split extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            currentPage: PAGES.home,
        };
    }

    onChangePage( page ) {
        return ( event ) => {
            event.preventDefault();

            this.setState( {
                currentPage: page,
            } )
        }
    }

    render() {
        let content;
        switch ( this.state.currentPage ) {
            case PAGES.home:
                content = <Home/>;
                break;
            case PAGES.planning:
                content = <Planning/>;
                break;
            case PAGES.production:
                content = <Production/>;
                break;
            case PAGES.purchasing:
                content = <Purchasing/>;
                break;
            case PAGES.harvest:
                content = <Harvest/>;
                break;
            case PAGES.analytics:
                content = <Analytics/>;
                break;
            case PAGES.integration:
                content = <Integration/>;
                break;
        }

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand onClick={this.onChangePage( PAGES.home )} href="/">Conservis</NavbarBrand>
                    <Nav className="ml-6" navbar>
                        <NavItem>
                            <NavLink
                                active={this.state.currentPage === PAGES.planning}
                                onClick={this.onChangePage( PAGES.planning )}
                            >Planning</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.currentPage === PAGES.purchasing}
                                onClick={this.onChangePage( PAGES.purchasing )}
                            >Purchasing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.currentPage === PAGES.production}
                                onClick={this.onChangePage( PAGES.production )}
                            >Production</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.currentPage === PAGES.harvest}
                                onClick={this.onChangePage( PAGES.harvest )}
                            >Harvest</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.currentPage === PAGES.integration}
                                onClick={this.onChangePage( PAGES.integration )}
                            >Integration</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={this.state.currentPage === PAGES.analytics}
                                onClick={this.onChangePage( PAGES.analytics )}
                            >Analytics</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                {content}
            </div>
        );
    }
}

export default Split;
