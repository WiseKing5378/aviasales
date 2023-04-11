import { Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { onChange, onCheckAllChange } from '../../Store/TransferFilterSlice';

import style from './TransferFilter.module.scss';

function TransferFilter() {
  const { indeterminate, plainOptions, checkedList, checkAll } = useSelector((state) => state.TransferFilterSlice);
  const dispatch = useDispatch();
  const CheckboxGroup = Checkbox.Group;

  return (
    <div className={style.transfer_filter}>
      <h2 className={style.transfer_filter__title}>Количество пересадок</h2>
      <Checkbox
        className={style.checkbox_hover}
        indeterminate={indeterminate}
        onChange={(e) => {
          dispatch(onCheckAllChange(e.target.checked));
        }}
        checked={checkAll}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        className={style.checkbox_group}
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
