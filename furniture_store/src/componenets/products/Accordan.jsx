import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Checkbox } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

export const Accordan = ({ setQueryParam }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const cat = searchParams.get('cat');
  const manufacturer = searchParams.get('manufacturer');
  const rating = searchParams.get('rating');

  const handleCatChange = (value) => {
    setQueryParam('cat', value === cat ? '' : value);
  };

  const handleManufacturerChange = (value) => {
    setQueryParam('manufacturer', value === manufacturer ? '' : value);
  };

  const handleRatingChange = (value) => {
    setQueryParam('rating', value === rating ? '' : value);
  };

  return (
    <Accordion defaultIndex={[0,1,2]} allowMultiple className='filter-acc'>
      <AccordionItem>
        <h2 className='head-filter-cat'>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontSize={["xs", "sm", "md", "md"]}>
              CATEGORY
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} height={'150px'} display={'flex'} flexDirection={'column'}>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleCatChange('office')}
            isChecked={cat === 'office'}
          >
            Office
          </Checkbox>
          <Checkbox
            border={"orange"}
            size={["sm", "md", "md", "md"]}

            onChange={() => handleCatChange('study')}
            isChecked={cat === 'study'}
          >
            Study
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleCatChange('dining')}
            isChecked={cat === 'dining'}
          >
            Dining
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleCatChange('living')}
            isChecked={cat === 'living'}
          >
            Living
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleCatChange('hall')}
            isChecked={cat === 'hall'}
          >
            Hall
          </Checkbox>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2 className='head-filter-cat'>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontSize={["xs", "sm", "md", "md"]}>
              MANUFACTURER
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} height={'150px'} display={'flex'} flexDirection={'column'}>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleManufacturerChange('AK_Design')}
            isChecked={manufacturer === 'AK_Design'}
          >
            AK Design
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleManufacturerChange('Gold_Furniture')}
            isChecked={manufacturer === 'Gold_Furniture'}
          >
            G Furniture
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleManufacturerChange('Chairable')}
            isChecked={manufacturer === 'Chairable'}
          >
            Chairable
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleManufacturerChange('Accent')}
            isChecked={manufacturer === 'Accent'}
          >
            Accent
          </Checkbox>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2 className='head-filter-cat'>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left' fontSize={["xs", "sm", "md", "md"]}>
              RATING
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} height={'150px'} display={'flex'} flexDirection={'column'}>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleRatingChange('1')}
            isChecked={rating === '1'}
          >
            1 <i className="fa-solid fa-star"></i> & more
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleRatingChange('2')}
            isChecked={rating === '2'}
          >
            2 <i className="fa-solid fa-star"></i> & more
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleRatingChange('3')}
            isChecked={rating === '3'}
          >
            3 <i className="fa-solid fa-star"></i> & more
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleRatingChange('4')}
            isChecked={rating === '4'}
          >
            4 <i className="fa-solid fa-star"></i> & more
          </Checkbox>
          <Checkbox
            size={["sm", "md", "md", "md"]}
            border={"orange"}
            onChange={() => handleRatingChange('5')}
            isChecked={rating === '5'}
          >
            5 <i className="fa-solid fa-star"></i> & more
          </Checkbox>
        </AccordionPanel>
      </AccordionItem>
      {/* Remaining accordion items */}
    </Accordion>
  );
};
