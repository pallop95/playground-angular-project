export const ADD_NEW_USER = {
  MAIN_LABEL: 'ผู้ใช้ใหม่',

  SELECT_ALL_CHECKBOX: 'เลือกทั้งหมด',
  CONTENT_1: {
   SUB_LABEL: 'ข้อมูลผู้ใช้',
   INPUTS: {
     I1: 'ค้นหา LDAP User ID',
     I2: 'ชื่อ นามสกุล',
     I3: 'อีเมล',
     I4: 'ทีม/สายงาน',
     I5: 'ตำแหน่งงาน',
     I6: 'หมายเลขโทรศัพท์',
   }
  },
  CONTENT_2: {
    SUB_LABEL: 'หน้าที่และสิทธิ์ดูแลข้อมูล',
    INPUTS: {
      I1: 'LEXS role',
      I2: 'LEXS sub-role',
      I3: 'สิทธิ์ในการดูข้อมูล',
      I4: 'ระดับ',
      I5: 'ระบุ',
    }
  },
  CONTENT_3: {
    SUB_LABEL: 'สิทธิ์ดู Dashboard',
    INPUTS: {
      I1: 'ลูกหนี้แบ่งตาม DPD และสถานะเอกสาร',
      I2: 'การบอกกล่าวแบ่งตามประเภทผู้รับ',
      I3: 'คดีความแบ่งตามกระบวนการศาล',
      I4: 'การชะลอดำเนินคดีแบ่งตามขั้นตอนดำเนินงาน',
      I5: 'เงินค้างรับคืนจากศาลแบ่งตามระยะเวลา',
      I6: 'ลูกหนี้แบ่งตามสถานะ',
      I7: 'อัพโหลดเอกสารลูกหนี้',
      // I8: 'เลือกทั้งหมด',
    }
  },
  CONTENT_4: {
    SUB_LABEL: 'สิทธิ์ใช้งานหน้างาน',
    INPUT: 'โอนงาน',
  },
  CONTENT_5: {
    SUB_LABEL: 'สิทธิ์ใช้งานหน้าลูกหนี้',
    INPUT: 'ดูข้อมูลลูกหนี้',
    INPUTS: {
      I1: 'เพิ่มรายชื่อผู้เกี่ยวข้อง',
      I2: 'ตรวจสอบสถานะต้นฉบับเอกสารลูกหนี้',
      I3: 'อัพโหลดเอกสารลูกหนี้',
      // I4: 'เลือกทั้งหมด',
    }
  },
  CONTENT_6: {
    SUB_LABEL: 'สิทธิ์ใช้งานหน้าคดีความ',
    INPUT: 'ดูข้อมูลคดีความ',
    INPUTS: {
      I1: 'มอบหมายคดี',
      I2: 'รวมเลขที่กฏหมาย',
      I3: 'สร้างคดี',
      I4: 'สร้างบอกกล่าว',
      I5: 'เพิ่มรายชื่อผู้เกี่ยวข้อง',
      I6: 'ตรวจสอบสถานะต้นฉบับเอกสารลูกหนี้',
      I7: 'อัพโหลดเอกสารคดีความ',
      I8: 'สร้างแบบร่างคำฟ้อง',
      I9: 'บันทึกคำฟ้อง/อุทธรณ์/ฎีกา',
      I10: 'ให้ความเห็นทนายเกี่ยวกับการยื่นอุทธรณ์/ฎีกา',
      I11: 'อนุมัติยื่นอุทธรณ์/ฎีกา',
      I12: 'ออกคำบังคับ',
      // I13: 'เลือกทั้งหมด',
    }
  },
  CONTENT_7: {
    SUB_LABEL: 'สิทธิ์ใช้งานหน้าการเงิน',
    INPUT: 'ดูข้อมูลการเงิน',
    INPUT_GROUPS: {
      IG1: {
        HEADER: 'รายจ่าย',
        INPUTS: {
          I1: 'สร้างหนังสือจ่ายเงิน',
          I2: 'ตรวจสอบการเบิกเงิน',
          I3: 'บันทึกรับเอกสารจ่ายเงิน',
          I4: 'พิจารณาจ่ายเงิน',
          I5: 'อนุมัติจ่ายเงิน',
          I6: 'อัปโหลดใบเสร็จรับเงิน',
          I7: 'ตรวจสอบใบเสร็จรับเงิน',
          I8: 'ดาวน์โหลดหนังสือรับรองการหักภาษี ณ ที่จ่าย',
          I9: 'โอนงานจ่ายเงิน',
          I10: 'เลือกทั้งหมด',
        }
      },
      IG2: {
        HEADER: 'รายรับ',
        INPUTS: {
          I1: 'สร้างหนังสือรับเงิน',
          I2: 'ตรวจสอบหนังสือรับเงิน',
          I3: 'เลือกทั้งหมด',
        }
      },
      IG3: {
        HEADER: 'โอนเงินทดรองจ่าย',
        INPUTS: {
          I1: 'สร้างรายการโอนเงินทดรองจ่าย',
          I2: 'ตรวจสอบรายการโอนเงินทดรองจ่าย',
          I3: 'เลือกทั้งหมด',
        }
      }
    }
  },
}
