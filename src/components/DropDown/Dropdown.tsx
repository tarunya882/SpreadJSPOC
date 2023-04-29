import Select from '@material-ui/core/Select';
import React, { useCallback } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { FormControl, MenuItem ,Menu} from '@material-ui/core';
import clsx from 'clsx';
// import { PRIMARY_EXTRA_COLORS } from '../../theme/defaultTheme';

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    backgroundColor: '#eef9fe',
    borderRadius: '8px',
  },
  select: {
    backgroundColor: '#eef9fe',
    paddingLeft: '8px',
    marginRight: '8px !important',
    alignItems: 'center',
	marginTop: '4px',
	display:'flex',
  },
  root: {
    alignItems: 'center',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: 'fc7500',
    },
  },
  menuItemSelected: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  icon: {
    fontSize: 'x-large',
    marginRight: '8px',
  },
  selectRoot: {
    borderRadius: '8px',
    '&:focus': {
      backgroundColor: '#eef9fe',
    },
  },
  disabled: {
    backgroundColor: 'transparent'
  }
}));

export type Item = {
  id: string,
  name: string,
};

export type DropDownProps = {
  selectedId?: string,
  items: Array<Item>,
  onChange: (event: React.ChangeEvent<{ name?: string, value: unknown }>) => void,
  className?: string,
  testId?: string,
  isMutliSelect?: boolean,
  selectedIds?: Array<string>,
  disabled?: boolean,
  defaultValue?: string,
  placeHolderText?: string,
  ifEmptyMessage?: string,
  customClassesForDailog?: any,
};

const DropDown: React.FC<DropDownProps> = ({
  selectedId,
  onChange,
  items,
  className,
  testId,
  selectedIds,
  isMutliSelect,
  disabled,
  defaultValue,
  placeHolderText,
  ifEmptyMessage,
  customClassesForDailog,
}) => {
  const classes = useStyles();

  const getRenderValue = useCallback((id?: string, placeholderText?: string) => {
    return id ? undefined : () => placeholderText;
  }, []);

  return (
    <FormControl classes={{ root: clsx(classes.formControl, className, classes.formControl) }}>
      <Select
        value={isMutliSelect ? selectedIds : selectedId}
        onChange={onChange}
        displayEmpty={defaultValue ? false : true}
        multiple={isMutliSelect}
        disableUnderline
        classes={{
          select: clsx(classes.select, customClassesForDailog?.select),
          icon: classes.icon,
          root: classes.selectRoot,
          disabled: classes.disabled,
        }}
        data-testid={testId}
        MenuProps={{ disableScrollLock: true }}
        disabled={disabled}
        defaultValue={defaultValue}
        renderValue={placeHolderText ? getRenderValue(selectedId, placeHolderText) : undefined}
        inputProps={{ className: classes.disabled }}
      >
		  {/* <Menu
		anchorOrigin={{
			vertical:'bottom',
			hortizontal:'right',
		}}> */}
        {!items?.length && ifEmptyMessage && (
          <MenuItem
            key={ifEmptyMessage}
            value=""
            classes={{
              root: classes.root,
            }}
            data-testid="empty_value"
          >
            {ifEmptyMessage}
          </MenuItem>
        )}
        {items?.map((item: Item, index) => {
          return (
            <MenuItem
              key={item.id}
              value={item.id}
              classes={{
                root: classes.root,
              }}
              data-testid={`option${index}`}
            >
              {item.name}
            </MenuItem>
          );
        })}
		{/* </Menu> */}
      </Select>
    </FormControl>
  );
};

export default DropDown;
