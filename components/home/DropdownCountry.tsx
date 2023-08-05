import React, { FC } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Region } from "@/interfaces/country.interface";
import { useEffect } from "react";

interface Props {
  regions: Region[];
  setOption: React.Dispatch<React.SetStateAction<string>>;
}

export const DropdownCountry: FC<Props> = ({
  regions,
  setOption,
}) => {
  const [selectedKeys, setSelectedKeys] = React.useState<any>(
    new Set(["Filter by Region"])
  );
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  useEffect(() => {
    setOption(selectedValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

 

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection actions"
        variant="light"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {regions?.map((region) => (
          <DropdownItem key={region}>{region}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
