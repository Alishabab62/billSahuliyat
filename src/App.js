import './index.css';
import Dashboard from './components/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConsumerDashBoardPrepaid from './components/ConsumerDashBoardPrepaid';
import LinkConsumerCode from './components/LinkConsumerCode';
import NameChangeForm from './components/NameChangeForm';
import NameChangeDocument from './components/NameChangeDocument';
import OwnerShipChangeForm from './components/OwnerShipChangeForm';
import OwnershipChangeDocument from './components/OwnershipChangeDocument';
import TrackRequestForm from './components/TrackRequestForm';
import CategoryChangeForm from './components/CategoryChangeForm';
import CategoryChangeDocument from './components/CategoryChangeDocument';
import PostPaidDashboard from './components/PostPaidDashboard';
import BillHistory from './components/BillHistory';
import LoadChangeForm from './components/LoadChangeForm';
import LoadChangeDocument from './components/LoadChangeDocument';
import NetMetering from './components/NetMetering';
import PostpaidToPrepaid from './components/PostpaidToPrepaid';
import { SideContext } from './utils/SidebarContext';
import { useContext, useEffect, useState } from 'react';
import Profile from './components/Profile';
import NewConnectionForm from './components/NewConnectionForm';
import NewConnectionDocument from './components/NewConnectionDocument';
import PostpaidRecharge from './components/PostpaidRecharge';
import Login from './pages/Login';
import UsageDetails from './components/UsageDetails';
import EnergyConsumption from './components/EnergyConsumption';
import PaperLessBilling from './components/PaperLessBilling';
import SolarInstallation from './components/SolarInstallation';
import LandingPage from './components/LandingPage';
import Register from './pages/Register';
import Verify from './pages/Verify';
import ChangePhone from './components/ChangePhone';
import ChangeMail from './components/ChangeMail';
import ErrorPage from './components/ErrorPage';
import UserLog from './pages/UserSide';

function App() {
  const { display, setDisplay } = useContext(SideContext);

  const routerPrepaid = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: 'http://172.18.2.114:7020/landing/:id/:name',
      element: <LandingPage />,
    },
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: '/',
          element: <ConsumerDashBoardPrepaid />,
        },
        {
          path: '/link-consumer-code',
          element: <LinkConsumerCode />,
        },
        {
          path: '/name-change-form',
          element: <NameChangeForm />,
        },
        {
          path: '/name-change-upload',
          element: <NameChangeDocument />,
        },
        {
          path: '/ownership-change-form',
          element: <OwnerShipChangeForm />,
        },
        {
          path: '/ownership-change-upload',
          element: <OwnershipChangeDocument />,
        },
        {
          path: '/category-change-form',
          element: <CategoryChangeForm />,
        },
        {
          path: '/category-change-upload',
          element: <CategoryChangeDocument />,
        },
        {
          path: '/net-metering',
          element: <NetMetering />,
        },
        {
          path: '/bills',
          element: <BillHistory />,
        },
        {
          path: '/user-profile',
          element: <Profile />,
        },
        {
          path: '/load-change-form',
          element: <LoadChangeForm />,
        },
        {
          path: '/load-change-upload',
          element: <LoadChangeDocument />,
        },
        {
          path: '/usage-details',
          element: <UsageDetails />,
        },
        {
          path: '/energy-consumption',
          element: <EnergyConsumption />,
        },
        {
          path: '/paperless-billing',
          element: <PaperLessBilling />,
        },
        {
          path: '/track-request-form',
          element: <TrackRequestForm />,
        },
      ],
    },
    {
      path: '/new-connection-form',
      element: <NewConnectionForm />,
    },
    {
      path: '/new-connection-document',
      element: <NewConnectionDocument />,
    },
    {
      path: '/track-request',
      element: <TrackRequestForm />,
    },
    {
      path: '/install-solar',
      element: <SolarInstallation />,
    },

    {
      path: '/sign-up',
      element: <Register />,
    },
    {
      path: '/verify',
      element: <Verify />,
    },
    {
      path: '/verify/changephone',
      element: <ChangePhone />,
    },
    {
      path: '/verify/changemail',
      element: <ChangeMail />,
    },
  ]);
  const routerPostPaid = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/landing/:id/:name',
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/powercurliment',
      element: <UserLog />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: '/',
          element: <PostPaidDashboard />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/bills',
          element: <BillHistory />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/link-consumer-code',
          element: <LinkConsumerCode />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/name-change-form',
          element: <NameChangeForm />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/name-change-upload',
          element: <NameChangeDocument />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/ownership-change-form',
          element: <OwnerShipChangeForm />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/ownership-change-upload',
          element: <OwnershipChangeDocument />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/category-change-form',
          element: <CategoryChangeForm />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/category-change-upload',
          element: <CategoryChangeDocument />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/load-change-form',
          element: <LoadChangeForm />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/load-change-upload',
          element: <LoadChangeDocument />,
        },
        {
          path: '/net-metering',
          element: <NetMetering />,
        },
        {
          path: '/postpaid-prepaid',
          element: <PostpaidToPrepaid />,
        },
        {
          path: '/postpaid-recharge',
          element: <PostpaidRecharge />,
        },
        {
          path: '/user-profile',
          element: <Profile />,
        },
        {
          path: '/usage-details',
          element: <UsageDetails />,
        },
        {
          path: '/energy-consumption',
          element: <EnergyConsumption />,
        },
        {
          path: '/paperless-billing',
          element: <PaperLessBilling />,
        },
        {
          path: '/track-request-form',
          element: <TrackRequestForm />,
        },
      ],
    },
    {
      path: '/track-request',
      element: <TrackRequestForm />,
    },
    {
      path: '/install-solar',
      element: <SolarInstallation />,
    },

    {
      path: '/sign-up',
      element: <Register />,
    },
    {
      path: '/verify',
      element: <Verify />,
    },
    {
      path: '/verify/changephone',
      element: <ChangePhone />,
    },
    {
      path: '/verify/changemail',
      element: <ChangeMail />,
    },
    {
      path: '/new-connection-form',
      element: <NewConnectionForm />,
    },
    {
      path: '/new-connection-document',
      element: <NewConnectionDocument />,
    },
    {
      path: '*',
      errorElement: <ErrorPage />,
    },
  ]);

  function temp() {
    setDisplay(true);
  }
  // console.log(user)
  return (
    <div
      className="App"
      onClick={temp}
      style={{ overflow: display ? '' : 'hidden' }}
    >
      {
        // user.category === "Postpaid" ?  <RouterProvider
        // router={routerPostPaid}
        // /> :  <RouterProvider
        // router={routerPrepaid}
        // />
        <RouterProvider router={routerPostPaid} />
      }
    </div>
  );
}

export default App;
