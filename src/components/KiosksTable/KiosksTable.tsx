import React from 'react';
import { Table, TableColumnConfig, Button, UserLabel } from '@gravity-ui/uikit';

import { i18nKiosk } from './i18n';

import { useNavigate } from '@tanstack/react-router';
import { FIRST_GROUP, GroupOfUsers, MOCK_ADMIN, MOCK_USER_1, UserType } from '../../types/user';

import styles from './KiosksTable.module.scss';

type KioskDataType = {
  id: string;
  name: string;
  type: string;
  admins: UserType[];
  supervisors: GroupOfUsers[];
};

const MOCK_DATA: KioskDataType[] = [
  {
    id: '1',
    name: 'Midory',
    type: 'SD',
    admins: [MOCK_ADMIN, MOCK_USER_1],
    supervisors: [FIRST_GROUP],
  },
  {
    id: '2',
    name: 'Midory 2',
    type: 'HR',
    admins: [MOCK_ADMIN, MOCK_USER_1],
    supervisors: [FIRST_GROUP],
  },
];

export const KiosksTable = (): React.ReactNode => {
  const navigate = useNavigate({ from: '/kiosks' });

  const tableColumns: TableColumnConfig<KioskDataType>[] = [
    {
      id: 'id',
      name: i18nKiosk('id'),
      align: 'center',
    },
    {
      id: 'name',
      name: i18nKiosk('name'),
      align: 'start',
    },
    {
      id: 'type',
      name: i18nKiosk('type'),
      align: 'start',
    },
    {
      id: 'admins',
      name: i18nKiosk('admins'),
      align: 'start',
      template(item) {
        return (
          <div className={styles.people}>
            {item.admins.map((item) => {
              return (
                <UserLabel
                  type="person"
                  avatar={{ text: item.fullName }}
                  key={item.id}
                  className={styles.userLabels}
                >
                  {item.fullName}
                </UserLabel>
              );
            })}
          </div>
        );
      },
    },
    {
      id: 'supervisors',
      name: i18nKiosk('supervisors'),
      align: 'start',
      template(item) {
        return (
          <div className={styles.people}>
            {item.supervisors.map((item) => {
              return (
                <UserLabel
                  type="person"
                  avatar={{ text: item.name }}
                  className={styles.userLabels}
                  key={item.id}
                  onClick={() => {
                    console.info('Clicked group for added ', { item });
                  }}
                >
                  {item.name}
                </UserLabel>
              );
            })}
          </div>
        );
      },
    },
    {
      id: 'edit',
      name: i18nKiosk('edit'),
      align: 'center',
      template: (item) => {
        return (
          <div className={styles.actionButtons}>
            <Button
              view="normal"
              onClick={() => {
                navigate({
                  to: '/kiosks/$kioskId',
                  params: { kioskId: item.id },
                });
              }}
            >
              {i18nKiosk('edit')}
            </Button>
            <Button
              view="outlined-danger"
              onClick={() => {
                console.info('Deleted item ', { item });
              }}
            >
              {i18nKiosk('delete')}
            </Button>
          </div>
        );
      },
    },
  ];
  tableColumns[0].width = '5%';
  tableColumns[1].width = '10%';
  tableColumns[2].width = '8%';
  tableColumns[3].width = '30%';
  tableColumns[4].width = '45%';

  return (
    <div className={styles.main}>
      <Table columns={tableColumns} data={MOCK_DATA} verticalAlign="middle" />
    </div>
  );
};
