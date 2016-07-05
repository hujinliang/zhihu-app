import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';


const AboutDialog = ({
  open,
  CLOSE_ABOUT_DIALOG
}) => {
  const actions = [
    <FlatButton
      label="关闭"
      primary={true}
      keyboardFocused={true}
      onTouchTap={() => CLOSE_ABOUT_DIALOG()}
    />
  ];

  return (
    <div>
      <Dialog
        title="关于"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={() => CLOSE_ABOUT_DIALOG()}
      >
      
        使用知乎开源API制作，如有任何侵权可联系作者删除。
        <a
          href="https://github.com/HUJINLIANG"
          target="_blank"
        >
          Github
        </a>
        {" | "}
        <a
        href="mailto:1617451312@qq.com"
        >
          Send E-Mail
        </a>
      </Dialog>
    </div>
  );
}

export default AboutDialog