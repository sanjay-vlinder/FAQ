//@ts-nocheck
import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Panel, PanelGroup} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export type FaqVProps = {
  faqData?: {heading:string,defaultActiveKey:string,data:any[]}
  headingStyle?:any;
  iconStyle?:any;
  containerStyle?:any;
  accordion?:boolean;
  active?:any;
  bordered?:any;
  defaultActiveKey?:any;
  eventKey?:any;

};

const faqV = (props: FaqVProps) => {
  const output: any = [];
  const getFaq = () => {
    Array.isArray(props?.faqData.data) && props?.faqData.data.forEach(items => {
        output.push(
        <Panel  eventKey={items?.key} header={<span ><Icon icon={items.icon} style={StyleSheet.flatten([props?.iconStyle])}/>{items?.question}</span>}>{items?.answer}</Panel>

        );
      });
    return output;
  };

  return (
    <div style={StyleSheet.flatten([props?.containerStyle])}>
        <h3 style={StyleSheet.flatten([props?.headingStyle])}>{props?.faqData?.heading}</h3>
    <PanelGroup accordion={props?.accordion} bordered={props?.bordered} defaultActiveKey={props?.faqData?.defaultActiveKey} >
      {getFaq()}
    </PanelGroup>
    </div>
  );
};

export default faqV;
