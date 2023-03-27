import './TransferFilter.scss';
import { Checkbox } from 'antd';
import { useState } from 'react';

function TransferFilter() {
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  const defaultCheckedList = ['Apple', 'Orange'];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <div className="transfer-filter">
      <h2 className="transfer-filter__title">Количество пересадок</h2>
      <Checkbox className="checkbox-hover" indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup className="checkbox-group" options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  );
}

export default TransferFilter;
