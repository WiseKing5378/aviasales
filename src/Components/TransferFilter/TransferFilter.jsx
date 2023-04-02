import './TransferFilter.scss';
import { Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { onChange, onCheckAllChange } from '../../Store/TransferFilterSlice';

function TransferFilter() {
  const { indeterminate, plainOptions, checkedList, checkAll } = useSelector((state) => state.TransferFilterSlice);
  const dispatch = useDispatch();
  const CheckboxGroup = Checkbox.Group;

  return (
    <div className="transfer-filter">
      <h2 className="transfer-filter__title">Количество пересадок</h2>
      <Checkbox
        className="checkbox-hover"
        indeterminate={indeterminate}
        onChange={(e) => {
          dispatch(onCheckAllChange(e.target.checked));
        }}
        checked={checkAll}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        className="checkbox-group"
        options={plainOptions}
        value={checkedList}
        onChange={(e) => {
          dispatch(onChange(e));
        }}
      />
    </div>
  );
}

export default TransferFilter;
