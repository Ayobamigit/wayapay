import React from 'react'
import './SideBar.scss'
import { ReactComponent as SideActivities } from "../../../assets/icons/side_activities.svg";
import { ReactComponent as SideDespute } from "../../../assets/icons/side_despute.svg";
import { ReactComponent as SideOverview } from "../../../assets/icons/side_overview.svg";
import { ReactComponent as SideSettings } from "../../../assets/icons/side_settings.svg";
import { ReactComponent as SideSettlements } from "../../../assets/icons/side_settlements.svg";
import { ReactComponent as SideStarted } from "../../../assets/icons/side_started.svg";
import { ReactComponent as SideSubmit } from "../../../assets/icons/side_submit.svg";
import { ReactComponent as SideSupport } from "../../../assets/icons/side_support.svg";
import { ReactComponent as SideTerminals } from "../../../assets/icons/side_terminals.svg";
import { ReactComponent as SideTransactions } from "../../../assets/icons/side_transactions.svg";
import {NavLink} from 'react-router-dom';


const SideBar = (props) => {
  return (
    <div className="Sidebar">
        <div className="NavigationBox">
            <ul className={props.title === 'Dashboard' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideStarted className={props.title === 'Dashboard' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Getting Started</NavLink>
                </li>
            </ul>

            <ul className={props.title === 'Kyc' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideSubmit className={props.title === 'Kyc' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Submit Kyc</NavLink>
                </li>
            </ul>

            <ul className={props.title === 'Overview' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideOverview className={props.title === 'Overview' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Overview</NavLink>
                </li>
            </ul>

            <ul className={props.title === 'Terminals' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideTerminals className={props.title === 'Terminals' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/terminals">Terminals</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Transactions' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideTransactions className={props.title === 'Transactions' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/transactions">Transactions</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Settlements' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideSettlements className={props.title === 'Settlements' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/settlements">Settlements</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Dispute' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideDespute className={props.title === 'Dispute' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/disputes">Dispute</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Notifications' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideActivities className={props.title === 'Notifications' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Notifications</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Settings' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideSettings className={props.title === 'Settings' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Settings</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Support' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideSupport className={props.title === 'Support' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Support</NavLink>
                </li>
            </ul>
            <ul className={props.title === 'Activity Log' ? 'Navigation-active' : 'Navigation'}>
                <li>
                    <SideActivities className={props.title === 'Activity Log' ? 'activeIcon' : 'sideIcon'} size={20} /><NavLink to ="/">Activity Log</NavLink>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default SideBar