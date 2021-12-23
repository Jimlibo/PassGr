/* with this query we alternate the data format of the Timestamp from varchar to timestamp */
select STR_TO_DATE(Timestamp, "%d/%m/%Y %H:%i") from Pass;

select * from Pass as p 
join Station as s using(StationID)
join Vehicle as v using(VehicleID)
where s.StationProvider="aodos"
and v.StationProvider="kentriki_odos"
and STR_TO_DATE(Timestamp, "%d/%m/%Y %H:%i") BETWEEN '2021-01-01' and '2021-10-01'
order by STR_TO_DATE(Timestamp, "%d/%m/%Y %H:%i");