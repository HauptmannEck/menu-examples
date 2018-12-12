import React, { Component } from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    ListGroup,
    ListGroupItem,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

const PAGES = {
    home: 'home',
    planning: 'planning',
    purchasing: 'purchasing',
    production: 'production',
    harvest: 'harvest',
    integration: 'integration',
    analytics: 'analytics',
};

class Vert extends Component {
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
                currentPage: this.state.currentPage === page ? undefined : page,
            } )
        }
    }

    render() {
        return (
            <div className="row">
                <div style={{ width: '150px' }}>
                    <Navbar className="d-block" color="light" light expand="md">
                        <NavbarBrand onClick={this.onChangePage( PAGES.home )} href="/">Conservis</NavbarBrand>
                        <Nav vertical navbar>
                            <NavItem>
                                <NavLink
                                    active={this.state.currentPage === PAGES.home}
                                    onClick={this.onChangePage( PAGES.home )}
                                >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={this.state.currentPage === PAGES.planning}
                                    onClick={this.onChangePage( PAGES.planning )}
                                >Planning</NavLink>
                                <Collapse isOpen={this.state.currentPage === PAGES.planning}>
                                    <ListGroup>
                                        <ListGroupItem>
                                            Templates
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Plans
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Budgets
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <UncontrolledDropdown
                                                direction="right"
                                            >
                                                <DropdownToggle
                                                    tag="span"
                                                >
                                                    Reports
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem header={true}>
                                                        Report Group 1
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report 1
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report 2
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report 3
                                                    </DropdownItem>
                                                    <DropdownItem divider={true}/>
                                                    <DropdownItem header={true}>
                                                        Report Group 2
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report 1
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report 2
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Report 3
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Collapse>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={this.state.currentPage === PAGES.purchasing}
                                    onClick={this.onChangePage( PAGES.purchasing )}
                                >Purchasing</NavLink>
                                <Collapse isOpen={this.state.currentPage === PAGES.purchasing}>
                                    <ListGroup>
                                        <ListGroupItem>
                                            Templates
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Plans
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Budgets
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Reports
                                        </ListGroupItem>
                                    </ListGroup>
                                </Collapse>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={this.state.currentPage === PAGES.production}
                                    onClick={this.onChangePage( PAGES.production )}
                                >Production</NavLink>
                                <Collapse isOpen={this.state.currentPage === PAGES.production}>
                                    <ListGroup>
                                        <ListGroupItem>
                                            Templates
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Plans
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Budgets
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Reports
                                        </ListGroupItem>
                                    </ListGroup>
                                </Collapse>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    active={this.state.currentPage === PAGES.harvest}
                                    onClick={this.onChangePage( PAGES.harvest )}
                                >Harvest</NavLink>
                                <Collapse isOpen={this.state.currentPage === PAGES.harvest}>
                                    <ListGroup>
                                        <ListGroupItem>
                                            Templates
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Plans
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Budgets
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Reports
                                        </ListGroupItem>
                                    </ListGroup>
                                </Collapse>
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
                </div>
                <div className="col">
                    Content
                </div>
            </div>
        );
    }
}

export default Vert;
